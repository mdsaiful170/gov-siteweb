import { Reviewdata } from "../../../lib/db/datadb";
import { Reviewbox } from "../../share/Reviewbox";
import { Container } from "../compobox/Container";
import { Heading } from "../compobox/Heading";
import { Star } from "../compobox/star";
import { cn } from "../../../lib/utilites/cn";

const Review = () => {
  const [active, setactive] = useState(1);
  const review = Reviewdata[active];

  return (
    <>
      <section className="my-[150px] py-20 bg-[#F6F6F6]">
        <Container>
          <Heading gradinet={"Out Client"} className={"text-center"}>
            Reviews Froms{" "}
          </Heading>
          <div className="pt-10 flex items-center justify-center gap-10 lg:gap-[80px] xl:gap-[93px]">
            <div className="flex w-full gap-5">
              <div className="bg-[#E2DED8] w-[5px] rounded-[5px]">
                <div className="space-y-[15px]">
                  {Array.from(Array(3).keys()).map((el) => (
                    <div
                      key={el}
                      className={cn(
                        "w-[5px] h-[92px] rounded-[20px]  bg-transparent",
                        active === el && "bg-textblue"
                      )}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="space-y-[13px] flex-grow">
                {Reviewdata.map((res, i) => (
                  <div key={i}>
                    <Reviewbox
                      {...res}
                      active={active === i}
                      onClick={() => setactive(i)}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full space-y-[20px]">
              <h2 className="text-[30px] text-textsecondary font-bold">
                {review.review.title}
              </h2>
              <div className="flex gap-[5px]">
                {Array.from(Array(review.review.stars).keys()).map((el) => (
                  <Star key={el} className={"text-[#FC950F] size-5 "} />
                ))}
              </div>
              <p className="text-base font-semibold text-textprimary max-w-[555px]">
                {review.review.details}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Review;
