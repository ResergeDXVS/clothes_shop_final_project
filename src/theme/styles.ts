import { css } from "styled-components";

const FlexboxStructure = (direction:"row"|"column",justify:string,align:string) => {
	return css`
		display: flex;
		flex-direction: ${direction};
		justify-content: ${justify};
		align-items: ${align};
	`;
}

const PxToRem = (px: number, base: number = 16) => {
	return `${px / base}rem`;
};


const phoneAdjustments = (styles: any) => css`
	@media screen and (max-width: 750px) {
		${styles}
	}
`;

const mediaAdjustments = (styles: any) => css`
	@media screen and (max-width: 1250px) and (min-width: 750px) {
		${styles}
	}
`;

export {
	FlexboxStructure,
	PxToRem,
	phoneAdjustments,
	mediaAdjustments
}
