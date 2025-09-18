export default function Projects({title, description, image, link}) {
  return (
    <section className="page">
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={image} alt={title} />
      <a href={link}>View Project</a>
    </section>
  );
}
