import React from "react"

import Logo from "~/assets/Logo.svg"
import {
	CoverContainer,
	CoverLeftEffectContainer,
	CoverLeftEffectEllipse,
	CoverLogoImage,
	CoverLogoImageContainer,
	CoverRightEffectContainer,
	CoverRightEffectEllipse,
} from "~/components/Cover/styles"
import { CoverLeftEffectSVG } from "~/components/SVG/CoverLeftEffect"
import { CoverRightEffectSVG } from "~/components/SVG/CoverRightEffect"

interface CoverProps {}

export const Cover: React.FC<CoverProps> = () => {
	return (
		<CoverContainer>
			<CoverLeftEffectContainer>
				<CoverLeftEffectSVG />
			</CoverLeftEffectContainer>

			<CoverLeftEffectEllipse />
			<CoverRightEffectEllipse />

			<CoverRightEffectContainer>
				<CoverRightEffectSVG />
			</CoverRightEffectContainer>

			<CoverLogoImageContainer>
				<CoverLogoImage src={Logo} />
			</CoverLogoImageContainer>
		</CoverContainer>
	)
}
