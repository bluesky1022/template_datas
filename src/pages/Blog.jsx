import { NoPage } from "../components/Blog/NoPage";
import { HeroBanner } from "../components/Common/HeroBanner";
import { breadcrumbs, contactUsLists } from "../data/Blog";

const Blog = () => {
  return (
    <div>
      <HeroBanner
        title={"Blog"}
        breadcrumbs={breadcrumbs}
        Lists={contactUsLists}
      />
      <NoPage></NoPage>
    </div>
  );
};

export default Blog;
