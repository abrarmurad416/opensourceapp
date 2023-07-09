import Feed from "@components/Feed";

const Home = () => (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share
            <br className="max-md:hidden" />
            <span className="blue_gradient text-center">
                {" "}
                Dynamic Collaboration
            </span>{" "}
            +{" "}
            <span className="green_gradient text-center">
                Inspiring Contributions
            </span>
        </h1>
        <p className="desc text-center">
            our platform serves as a central hub where users can explore diverse
            projects and easily find opportunities to contribute. Whether you're
            a seasoned developer or just starting your journey, our inclusive
            and welcoming community encourages everyone to participate.
        </p>
        <Feed />
    </section>
);

export default Home;
