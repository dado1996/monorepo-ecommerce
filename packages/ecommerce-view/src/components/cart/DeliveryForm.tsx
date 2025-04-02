import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { fetchCountries } from "../../services/countries";
import Toast from "react-bootstrap/Toast";
import { generateBill } from "../../services/generateBill";
import useStore from "../../hooks/store";

type FormData = {
  fullName: string;
  email: string;
  phone: number;
  country: string;
};

export default function DeliveryForm() {
  const cartItems = useStore((state) => state.cart);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: 0,
    country: "",
  });
  const [error, setError] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      const countriesAmerica = await fetchCountries();
      console.log(countriesAmerica);
      if (!formData.fullName || !formData.email || formData.phone == 0 || !formData.country) {
        setError("There are missing fields");
        return;
      }
      if (countriesAmerica.indexOf(formData.country)) {
        setError("It must be a country from America");
        return;
      }

      generateBill(
        {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
        },
        cartItems
      );
    } catch (error) {
      console.error("There was an error when submitting the form: " + error);
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          name="fullName"
          onChange={handleChange}
          value={formData.fullName}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" onChange={handleChange} value={formData.email} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Phone</Form.Label>
        <Form.Control type="phone" name="phone" onChange={handleChange} value={formData.phone} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Country</Form.Label>
        <Form.Control type="text" name="country" onChange={handleChange} value={formData.country} />
      </Form.Group>
      <Button type="submit" className="btn btn-primary mt-3">
        Pay
      </Button>
      <Toast show={!!error} onClose={() => setError("")}>
        <Toast.Body>{error}</Toast.Body>
      </Toast>
    </Form>
  );
}
