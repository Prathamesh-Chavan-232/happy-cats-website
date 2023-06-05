const Title = ({ anim, children, className, ...props }) => {
	return (
		<p
      
      data-aos={anim}
			className={
				"text-5xl md:text-7xl font-extrabold relative z-20 " +
				(className || "")
			}
		>
			{children}
		</p>
	);
};

export default Title;
