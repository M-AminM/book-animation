import { useRouter } from "next/router";
import { useEffect } from "react";
import { isLower991, useWidth } from "../../components/useWidth";

const About = () => {
  const lower = isLower991();
  const width = useWidth();
  const router = useRouter();

  useEffect(() => {
    if (lower) {
        router.replace("/");
    }
  }, [width]);
  return <div>About</div>;
};
export default About;
