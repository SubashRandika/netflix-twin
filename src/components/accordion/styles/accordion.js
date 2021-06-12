import styled from 'styled-components/macro';

export const Title = styled.h1`
	font-size: 50px;
	color: white;
	line-height: 1.1.%;
	margin-top: 0;
	margin-bottom: 8px;
	text-align: center;

	@media (max-width: 600px) {
		font-size: 35px;
	}
`;

export const Container = styled.div`
	display: flex;
	border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 815px;
	margin: auto;
	padding: 70px 45px;
`;

export const Item = styled.div`
	color: white;
	margin-bottom: 10px;
	margin: auto;
	max-width: 800px;
	width: 100%;

	&:first-of-type {
		margin-top: 3em;
	}
`;

export const Frame = styled.div`
	margin-bottom: 40px;
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	margin-bottom: 8px;
	font-size: 26px;
	font-weight: normal;
	background: #303030;
	padding: 0.8em 1.2em;
	user-select: none;

	img {
		filter: brightness(0) invert(1);
		width: 24px;

		@media (max-width: 600px) {
			width: 16px;
		}
	}

	@media (max-width: 600px) {
		font-size: 16px;
	}
`;

export const Body = styled.div`
	max-height: 1200px;
	transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
	font-size: 26px;
	font-weight: normal;
	line-height: normal;
	background: #303030;
	padding: 0.8em 2.2em 0.8em 1.2em;
	white-space: pre-wrap;
	user-select: none;

	@media (max-width: 600px) {
		font-size: 16px;
		line-height: 22px;
	}
`;
