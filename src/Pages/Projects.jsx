import { useEffect, useState } from "react"; 
import Products from "../components/Products";

function Projects() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/data/Products.json");
      const data = await response.json();
      
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <h1>Projects</h1>
      <section className="grid">
        {products.map(product => (
          <Products
            key={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
            link={product.link}
          />
        ))}
      </section>
    </div>
  );
}

export default Projects;
