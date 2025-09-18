import { useRef, useState } from "react";

const slides = [
	{
		img: "/assets/streetfood-prev.png",
		alt: "Aarhus Street Food",
		title: "Aarhus Street Food",
		desc: "Reworking of Aarhus Street Food website",
	},
	{
		img: "/assets/zerobuzz-prev.png",
		alt: "ZeroBuzzbrew",
		title: "Zero Buzz Brew",
		desc: "Branding of fictional alcohol free brand Zero Buzz Brew",
	},
	{
		img: "/assets/radar-prev.png",
		alt: "Aarhus Radar",
		title: "Aarhus Radar",
		desc: "Rebranding of Aarhus Radar",
	},
	{
		img: "/assets/studylab-prev.png",
		alt: "StudyLab",
		title: "StudyLab",
		desc: "Branding of fictional magazine StudyLab",
	},
	{
		img: "/assets/steno-prev.png",
		alt: "Steno Museum",
		title: "Steno Museum",
		desc: "Designing an interactive digital exhibition for Steno Museum",
	},
];

const Preview = () => {
	const swiperRef = useRef(null);
	const [current, setCurrent] = useState(0);
	const slideWidth = 350;

	const scrollLeft = () => {
		if (swiperRef.current) {
			let newIndex = current - 1;
			if (newIndex < 0) {
				newIndex = slides.length - 1;
				swiperRef.current.scrollTo({ left: slideWidth * newIndex, behavior: "smooth" });
			} else {
				swiperRef.current.scrollBy({ left: -slideWidth, behavior: "smooth" });
			}
			setCurrent(newIndex);
		}
	};

	const scrollRight = () => {
		if (swiperRef.current) {
			let newIndex = current + 1;
			if (newIndex >= slides.length) {
				newIndex = 0;
				swiperRef.current.scrollTo({ left: 0, behavior: "smooth" });
			} else {
				swiperRef.current.scrollBy({ left: slideWidth, behavior: "smooth" });
			}
			setCurrent(newIndex);
		}
	};

	return (
		<section className="projects-gallery">
			<h1>My Projects Gallery</h1>
			<div className="carousel-arrows">
				<button className="arrow left" onClick={scrollLeft} aria-label="Scroll left">
					<img src="/assets/arrow-left.png" alt="Arrow left"/>
				</button>
				<div className="swiper" ref={swiperRef}>
					<div className="swiper-wrapper">
						{slides.map((slide, idx) => (
							<aside
								className={
									idx === 0 ? "swiper-slide" : "carusel-item"
								}
								key={slide.title}
							>
								<img src={slide.img} alt={slide.alt} />
								<div className="overlay">
									<h3>{slide.title}</h3>
									<p>{slide.desc}</p>
								</div>
							</aside>
						))}
					</div>
				</div>
				<button className="arrow right" onClick={scrollRight} aria-label="Scroll right">
					<img src="/assets/arrow-right.png" alt="Arrow right"/>
				</button>
			</div>
		</section>
	);
};

export default Preview;