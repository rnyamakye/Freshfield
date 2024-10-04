import { ProductCard } from "../ProductCard";
import { Carousel } from "../Carousel";

export default function Home() {
  return (
    <main>
      <header className="py-[150px] px-5">
        <div className="flex flex-col gap-10">
          <div className="text-center flex-col flex gap-10">
            <h2 className="text-h6 font-semibold">
              FROM OUR FARM, TO YOUR TABLE
            </h2>
            <h1 className="text-h2 font-bold">
              Discover the Difference of
              <span className="-text--orange-700">Truly Organic</span>
              Vegetables
            </h1>
            <p className="text-h6">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className="flex justify-around">
            <button className="border -border--neutrals-900 w-fit py-3 rounded-lg -bg--lime-green px-5">
              Discover our products
            </button>
            <button className="border -border--neutrals-900 w-fit py-3 px-5  rounded-lg -bg--orange-700">
              Contact Us
            </button>
          </div>
          <div className="relative px-5">
            <img
              src="/64e5ccf15e0f1a0d6a77e18a_vegetable 9 (2)-p-500.png"
              alt="pumpkin"
              className="w-[90%]"
            />
            <img
              src="/64e5ccf2478b507f9e20e3f7_vegetable 8 (2)-p-500.webp"
              alt="cabbage"
              className="absolute w-[250px] -translate-y-32 translate-x-[30%]"
            />
            <img
              src="/64e5ccefea800368b14a2d9b_vegetable 11 (2).png"
              alt="garlic"
              className="absolute w-[100px] -translate-y-8 translate-x-[200%]"
            />

            <img
              src="/64e5ccf01b65148c147a6302_vegetable 4 (2).png"
              alt="tomato"
              className="absolute w-[150px] -translate-y-24 -translate-x-[15%]"
            />
          </div>
        </div>
      </header>
      <section id="about-us" className="-bg--lime-green">
        <div className="px-5 py-[50px] flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <h3 className="text-h5">ABOUT US</h3>
            <h2 className="text-h2 leading-10 font-semibold">
              Meet the Minds behind Our Modern Farm
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
          <div>
            <video
              src="/64dfaacfe1ce496bdd0ef70e_pexels-cottonbro-5561413 (2160p)_Trim-transcode.mp4"
              autoPlay
              loop
              muted
              className="rounded-3xl"
            />
          </div>
        </div>
      </section>
      <section id="our-story" className="-bg--okhra py-[50px] px-5">
        <div className="flex-col flex-5">
          <div className="flex-col flex gap-20">
            <div className="text-center flex-col flex gap-5">
              <h4 className="text-h6 font-semibold">OUR STORY</h4>
              <h2 className="text-h2 font-bold leading-9">
                Showing the Seeds of an Organic Revolution
              </h2>
            </div>
            <div className="flex flex-col gap-16">
              <div className="relative gap-5 flex-col flex">
                <div className="relative">
                  <p className="-text--white-100 font-bold w-[120px] rounded-xl text-center -bg--green-700 p-2 leading-none absolute -left-2 -translate-y-[25px]">
                    Our Farm 60 Years Ago
                  </p>
                  <img
                    src="/public/64e0e2b16e4ab569241c0bce_matthew-hacker-5oeDp3g4Hw8-unsplash (1)-p-500.webp"
                    alt="story-photo-1"
                    className="rounded-3xl border -border--neutrals-400"
                  />
                </div>
                <div className="flex-col flex gap-5">
                  <h3 className="text-h4 font-bold">
                    Rooted in Tradition: The Early Years of Our Farm
                  </h3>
                  <p className="text-h6 lg:text-h5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat.
                  </p>
                </div>
              </div>
              <div className="relative gap-5 flex-col flex">
                <div className="relative">
                  <p className="-text--white-100 font-bold w-[120px] rounded-xl text-center -bg--green-700 p-2 leading-none absolute -translate-y-[25px] -right-2">
                    Our Farm Today
                  </p>
                  <img
                    src="/public/64e0e2b1e5ca48456f1dc62a_max-muselmann-6ye8RbdqIfo-unsplash (1)-p-500green.webp"
                    alt="story-image-2"
                    className="rounded-3xl border -border--neutrals-400"
                  />
                </div>
                <div className="flex-col flex gap-5">
                  <h3 className="text-h4 font-bold">
                    Rooted in Tradition: The Early Years of Our Farm
                  </h3>
                  <p className="text-h6 lg:text-h5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-col flex gap-5">
              <h2 className="text-h3 text-center font-bold leading-9">
                Our Nubers talk for themselves
              </h2>
              <div className="flex flex-col gap-5">
                <div className="text-center w-full -bg--lime-green border -border--neutrals-500 rounded-2xl p-1 ">
                  <b className="text-h2">1,000+</b>
                  <p>Acres Cultivated</p>
                </div>
                <div className="text-center w-full -bg--lime-green border -border--neutrals-500 rounded-2xl p-1 ">
                  <b className="text-h2">5,000+</b>
                  <p>Happy Customers</p>
                </div>
                <div className="text-center w-full -bg--lime-green border -border--neutrals-500 rounded-2xl p-1 ">
                  <b className="text-h2">50+</b>
                  <p>Organic Products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="our-harvest" className="-bg--orange-500 py-[50px] px-5">
        <div>
          <div className="text-center flex-col flex gap-5">
            <h5 className="text-h6 font-semibold">OUR HARVEST</h5>
            <h2 className="text-h2 font-bold leading-10">
              Fresh, Nutritious, and 100% Organic
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </div>
          <div className="flex-col flex gap-5">
            <div className="">
              <ProductCard
                src="/64e740b1710d1c12c4bc84dd_rodion-kutsaiev-EPwuZxdketc-unsplash-p-500tomato.webp"
                name="Fresh Tomatoes"
                description=" Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit."
              />
            </div>
            <div>
              <ProductCard
                src="/public/64e73834549c69b0f67401b9_monika-grabkowska-ECxiHN817xE-unsplash-p-500potato.webp"
                name="Succulent Potatoes"
                description=" Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint."
              />
            </div>
            <div>
              <ProductCard
                src="/public/64e7385f710d1c12c4b1dbc9_terry-jaskiw-CU8MdyE4pG4-unsplash-p-500lettuce.webp"
                name="Lush Lettuce"
                description=" Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. "
              />
            </div>
            <div>
              <ProductCard
                src="/public/64e73fec21086db3a0736371_quin-engle-4pjNDw_Qvfk-unsplash-p-500.webp"
                name="Enchanting Egplant"
                description=" Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit."
              />
            </div>
            <div>
              <ProductCard
                src="/public/64e7401041be3500d84848ce_jonathan-pielmayer-aZzYKVLVki8-unsplash-p-500.webp"
                name="Crunchy Cucumber"
                description=" Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit."
              />
            </div>
            <div>
              <ProductCard
                src="/public/64e74035c367db6c175f56db_vino-li-v7H-fV9Ydkk-unsplash-p-500.webp"
                name="Bulgarian Pepper"
                description=" Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit."
              />
            </div>
          </div>
        </div>
      </section>
      <section
        id="benefits"
        className="py-[50px] flex-col flex gap-16 -bg--okhra"
      >
        <div className="px-5">
          <div className="text-center border -border--neutrals-500 rounded-2xl px-5 py-3 flex-col flex gap-10">
            <div className="flex-col flex gap-5">
              <h5 className="font-semibold">BENEFITS</h5>
              <h2 className="text-h2 font-semibold leading-10">
                The Benefits of Our Organic Bounty
              </h2>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div className=" w-fit flex flex-col items-center">
                <img
                  src="/public/64e22b07333767c27340e78c_IconPlaceholder (3).png"
                  alt="flavor"
                  className="w-[40px]"
                />
                <b>Pure Flavor</b>
              </div>
              <div className=" w-fit flex flex-col items-center">
                <img
                  src="/public/64e22b47d5f18f0669f98e6a_IconPlaceholder (4).png"
                  alt="flavor"
                  className="w-[40px]"
                />
                <b>Nutrient-Rich</b>
              </div>
              <div className=" w-fit flex flex-col items-center">
                <img
                  src="/public/64e22b47344c637a5cd377db_IconPlaceholder (5).png"
                  alt="flavor"
                  className="w-[40px]"
                />
                <b>Chemical-Free</b>
              </div>
              <div className=" w-fit flex flex-col items-center">
                <img
                  src="/public/64e22b473e1459ad41557f27_IconPlaceholder (6).png"
                  alt="flavor"
                  className="w-[40px]"
                />
                <b>Eco-Friendly</b>
              </div>
              <div className=" w-fit flex flex-col items-center">
                <img
                  src="/public/64e22b47fb4ad84f7d193535_IconPlaceholder (7).png"
                  alt="flavor"
                  className="w-[40px]"
                />
                <b>Locally Sourced</b>
              </div>
              <div className=" w-fit flex flex-col items-center">
                <img
                  src="/public/64e22b471d1c34380edbb119_IconPlaceholder (8).png"
                  alt="flavor"
                  className="w-[40px]"
                />
                <b>Great Quality</b>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/public/64e22c0beba14476cc08a3ca_pexels-gary-barnes-6231688-p-500.webp"
              alt="harvest-image"
              className="w-full h-1/2 rounded-2xl object-cover"
            />
          </div>
        </div>
        <div className="relative">
          <div className="">
            <video
              src="/public/64e22fe4b4f5ea9cdd5390b6_video (1080p)_Trim-transcode.mp4"
              autoPlay
              loop
              muted
              className="w-full object-cover h-[70vh]"
            />
            <div className="w-full object-cover h-[70vh] -bg--neutrals-900 bg-opacity-30 absolute top-0"></div>
          </div>
          <div className="flex justify-center absolute top-20">
            <div className="-text--white-100 -bg--green-700 p-5 w-[85%] flex-col flex gap-5 rounded-2xl">
              <h5 className="text-h6 font-semibold">
                INTERESTED IN OUR PRODUCTS?
              </h5>
              <h3 className="text-h3 font-bold">Reach Out to us!</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
              <button className="border -border--neutrals-500 w-fit p-3 rounded-lg -bg--lime-green -text--black-100">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="reviews" className="-bg--okhra px-5">
        <div>
          <div className="px-3">
            <Carousel
              src="/public/64e238df69bc93921402a609_foto-sushi-6anudmpILw4-unsplash (1)-p-500.webp"
              review="“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.”"
              name="Samuel Greene"
              title="Health-concious Parent"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
