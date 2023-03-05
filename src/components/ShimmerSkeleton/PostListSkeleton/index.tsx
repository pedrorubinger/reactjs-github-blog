import Skeleton from "react-loading-skeleton"
import { useTheme } from "styled-components"
import "react-loading-skeleton/dist/skeleton.css"

import {
	PostListSkeletonCard,
	PostListSkeletonCardHeader,
	PostListSkeletonContainer,
	PostListSkeletonRow,
} from "~/components/ShimmerSkeleton/PostListSkeleton/styles"

interface PostListSkeletonProps {}

export const PostListSkeleton: React.FC<PostListSkeletonProps> = () => {
	const theme = useTheme()
	const baseColor = theme["base-border"]
	const highlightColor = theme["base-highlight"]

	const getSkeleton = (width = "100%") => (
		<Skeleton
			width={width}
			baseColor={baseColor}
			highlightColor={highlightColor}
		/>
	)

	const Card = (
		<PostListSkeletonCard>
			<PostListSkeletonCardHeader>
				{getSkeleton()}
				{getSkeleton()}
			</PostListSkeletonCardHeader>

			{getSkeleton("70%")}
			{getSkeleton()}
			{getSkeleton()}
		</PostListSkeletonCard>
	)

	return (
		<PostListSkeletonContainer>
			<PostListSkeletonRow>
				{Card}
				{Card}
			</PostListSkeletonRow>
		</PostListSkeletonContainer>
	)
}
