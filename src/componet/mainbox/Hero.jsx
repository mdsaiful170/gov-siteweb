import { Button } from "../compobox/Button";
import { Container } from "../compobox/Container";

const Hero = () => {
  return (
    <>
      <Container>
        <div className="flex  items-center  justify-center md:justify-between md:gap-0 gap-5 md:flex-row flex-col-reverse  mx-auto ">
          <div>
            <h1 className="xl:text-[60px] lg:text-[50px] md:[40px] sm:text-[30px] text-[24px] font-bold text-textsecondary max-w-[593px] leading-normal md:leading-[60px] lg:leading-[76px]">
              Simplify your real estate document analysis
            </h1>
            <p className="lg:text-xl text-base text-textsecondary max-w-[519px] lg:leading-6 lg:py-[29px] py-3">
              Streamline, Automate, and Secure Your Business Documents with Ai
              GoverningDocs
            </p>
            <Button>Get Started Today</Button>
          </div>

          <div>
            <img
              className=" md:w-[450px] w-[90%] lg:w-[650px] xl:max-w-full"
              src="img/herobanner.png"
              alt="Simplify your real estate document analysis"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
