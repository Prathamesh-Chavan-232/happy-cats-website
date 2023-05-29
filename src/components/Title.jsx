const Title = ({ children, className, ...props }) => {
	return (
		<p
			className={
				"text-7xl font-extrabold text-primary relative z-20 " +
				(className || "")
			}
		>
			{children}
		</p>
	);
};

export default Title;
