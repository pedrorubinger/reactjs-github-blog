import Skeleton from "react-loading-skeleton"
import { useTheme } from "styled-components"
import "react-loading-skeleton/dist/skeleton.css"

import {
	ProfileCardSkeletonBody,
	ProfileCardSkeletonContainer,
	ProfileCardSkeletonFooter,
	ProfileCardSkeletonHeader,
} from "~/components/ShimmerSkeleton/ProfileCardSkeleton/styles"

interface ProfileCardSkeletonProps {}

export const ProfileCardSkeleton: React.FC<ProfileCardSkeletonProps> = () => {
	const theme = useTheme()
	const baseColor = theme["base-border"]
	const highlightColor = theme["base-highlight"]

	return (
		<ProfileCardSkeletonContainer>
			<ProfileCardSkeletonHeader>
				<Skeleton
					width="100%"
					baseColor={baseColor}
					highlightColor={highlightColor}
				/>
				<Skeleton
					width="100%"
					baseColor={baseColor}
					highlightColor={highlightColor}
				/>
			</ProfileCardSkeletonHeader>

			<ProfileCardSkeletonBody>
				<Skeleton
					width="100%"
					baseColor={baseColor}
					highlightColor={highlightColor}
				/>
				<Skeleton
					width="100%"
					baseColor={baseColor}
					highlightColor={highlightColor}
				/>
				<Skeleton
					width="100%"
					baseColor={baseColor}
					highlightColor={highlightColor}
				/>
			</ProfileCardSkeletonBody>

			<ProfileCardSkeletonFooter>
				<Skeleton
					width="100%"
					baseColor={baseColor}
					highlightColor={highlightColor}
				/>

				<Skeleton
					width="100%"
					baseColor={baseColor}
					highlightColor={highlightColor}
				/>
				<Skeleton
					width="100%"
					baseColor={baseColor}
					highlightColor={highlightColor}
				/>
			</ProfileCardSkeletonFooter>
		</ProfileCardSkeletonContainer>
	)
}
