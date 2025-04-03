import Container from "react-bootstrap/Container";
import useStore from "../hooks/store";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { priceFormat } from "common/priceFormat";
import Dropdown from "react-bootstrap/Dropdown";
import { useCallback, useMemo, useState } from "react";
import SearchBar from "../components/catalog/SearchBar";

export function Catalog() {
  const [filterCategory, setFilterCategory] = useState("");
  const [search, setSearch] = useState("");
  const products = useStore((state) => state.products);
  const addToCart = useStore((state) => state.addToCart);
  const categories = useStore((state) => state.categories);
  const filteredProducts = useMemo(() => {
    let filteredProducts = products;
    if (filterCategory) {
      filteredProducts = filteredProducts.filter((item) => item.category === filterCategory);
    }
    if (search) {
      filteredProducts = filteredProducts.filter((item) =>
        item.name.toLowerCase().startsWith(search.slice(0, Math.max(item.name.length - 1, 1)))
      );
    }
    return filteredProducts;
  }, [products, search, filterCategory]);

  const handleSearch = useCallback((query: string) => {
    setSearch(query);
    console.log("searchin for: ", query);
  }, []);
  return (
    <>
      <h1>Catalog</h1>
      <Container>
        <Row>
          <Col>
            <h3>Filter by</h3>
          </Col>
          <Col>
            Name:
            <SearchBar onSearch={handleSearch} />
          </Col>
          <Col>
            Category:
            <Dropdown>
              <Dropdown.Toggle>Select a category...</Dropdown.Toggle>
              <Dropdown.Menu>
                {categories.map((category, index) => (
                  <Dropdown.Item key={index} onClick={() => setFilterCategory(category)}>
                    {category}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Button type="button" onClick={() => setFilterCategory("")}>
              Clear filters
            </Button>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p) => {
              return (
                <Col key={p.id} style={{ border: "1px solid #ccc" }} xs={12} md={4} xl={3}>
                  <p>{p.name}</p>
                  <span className="me-3">
                    ${priceFormat(p.price)} -{" "}
                    <span data-units={`units-${p.id}`}>{p.stock} units</span>
                  </span>
                  <Button type="button" name={`button-${p.id}`} onClick={() => addToCart(p)}>
                    +
                  </Button>
                </Col>
              );
            })
          ) : (
            <Col>No product match with your search</Col>
          )}
        </Row>
      </Container>
    </>
  );
}
