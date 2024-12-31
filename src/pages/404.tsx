import NotFound from "../components/feature/notFound";
import SecondaryWrapper from "../components/ui/secondaryWrapper";

function _404() {
  return (
    <SecondaryWrapper title="404 Error">
      <NotFound />
    </SecondaryWrapper>
  );
}

export default _404;
