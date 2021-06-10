import styled from 'styled-components/macro';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	height: 100%;
	margin-top: 20px;
	flex-wrap: wrap;

	@media (max-width: 1000px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const Input = styled.input`
	max-width: 450px;
	width: 100%;
	border: solid 1px #8c8c8c;
	padding: 10px;
	height: 70px;
	box-sizing: border-box;
	border-radius: 2px;
`;

export const Button = styled.button`
	display: flex;
	align-items: center;
	height: 70px;
	background: #e50914;
	background-image: linear-gradient(to bottom, #e50914, #db0510);
	color: white;
	padding: 0 32px;
	font-size: 26px;
	border: 0;
	border-radius: 2px;
	cursor: pointer;
	letter-spacing: 0.1px;

	img {
		margin-left: 10px;
		filter: brightness(0) invert(1);
		width: 24px;

		@media (max-width: 1000px) {
			width: 16px;
		}
	}

	&:hover {
		background: #f40612;
		box-shadow: 0 1px 0 rgb(0 0 0 / 45%);
	}

	@media (max-width: 1000px) {
		height: 50px;
		font-size: 16px;
		margin-top: 20px;
		font-weight: bold;
		padding: 0 1em;
	}
`;

export const Text = styled.p`
	font-size: 19.2px;
	color: white;
	text-align: center;

	@media (max-width: 600px) {
		font-size: 16px;
		line-height: 22px;
	}
`;

export const Break = styled.div`
	flex-basis: 100%;
	height: 0;
`;
