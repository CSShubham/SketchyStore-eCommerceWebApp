import { lazy, Suspense } from "react";
const Lottie = lazy(() => import("lottie-react"));
import shoppingAnimation from "../assets/Online Shopping.json";
import Loading from "./Loading";
function HomeAnimation() {
  return (
    <div>
      <Suspense fallback={<div className="animate-spin rounded-full h-52 w-52 border-b-4 border-[#ff375c]"></div>}>
        <div className="w-full max-h-[500px] mx-auto object-contain">
          <Lottie animationData={shoppingAnimation} loop={true} />
        </div>
      </Suspense>
    </div>
  );
}

export default HomeAnimation;
