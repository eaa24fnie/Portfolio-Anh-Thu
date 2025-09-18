export default function Products({title, description, image, link}) {
  return (
    <section className="page">
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={image} alt={title} />
      <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
    </section>
  );
}
