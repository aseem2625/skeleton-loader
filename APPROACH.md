## Approach
Skeleton Loader helps in improving perceived performance of the app. There are **couple of approaches** to implement Skeleton Loader.

**UI wise**
1. Old Facebook website, Using gif for animation and has very complex dom structure for a post's card. 
2. New facebook website, concise dom structure but animation is simple shimmer, and not gradient. This makes easy to implement but adding animation to each element. But adds animation to each element!

**Implementation wise**
1. CSS only solution, via lot of background-positions. But gives no clarity from the code on how the DOM structure of animation looks like 😞.
2. HOC way/wrapping a div hierarchy with the SkeletonLoader component. And inside the render of SkeletonLoader, children can be parsed and applied a class having pseudo element :after which has animation on it. Nice developer-friendly solution 👍. But complex hierarchies? Not straightforward. Custom width/height of loaders? Not possible. 
3. Pre-define some presets for cards, title, profile pic, 3 lines, 2 lines structure, etc. And pass the presets in the same structure as the actual data 🤷‍♂

### My Approach: 👌😎

Composition using SkeletonLoader and SkeletonLoaderBones. 

For a given async-data based component, the structure of loader is created using SkeletonLoaderBones (any hierarchy), and wrapped inside SkeletonLoader to add animation and theme.

**Component Interface:**
1. [SkeletonLoader](https://github.com/aseem2625/skeleton-loader/blob/master/src/js/components/SkeletonLoader/index.js#L29-L34)
2. [SkeletonLoaderBone](https://github.com/aseem2625/skeleton-loader/blob/master/src/js/components/SkeletonLoader/SkeletonLoaderBone/index.js#L18-L32)

**Pros?**
1. Very simple to understand structure of loader animation.
2. Traditional way to create, by copy-pasting the actual component and replacing divs, span/ any nodes by SkeletonLoaderBone. This helps to allow non-loader elements(like parent containers, React components etc.) to be part of hierarchy as well.
3. Easily scalable to complex DOM structure.
4. Predictable width of loaders for corresponding data element.
5. Works for both dark and light theme.
6. Shimmer animation works as single animation on all the loader elements grouped inside SkeletonLoader component. **[Demo](https://aseem2625.github.io/skeleton-loader)** has 2 SkeletonLoader components, one below the other, and each having their own group of bones.
7. Performant since only 1 shimmer animation is added per SkeletonLoader group.
8. Since the background color of SkeletonLoaderBone is same for light and dark theme. Even the SkeletonLoaderBone which is overalapping on boundary of dark and light themed background would work as expected.

**Cons?**
1. Have to manually create a loader component for any new component.
