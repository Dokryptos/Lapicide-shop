
function Homepage(){
    return(
        <section>
            <input type="text" className="mt-[60px] laptop:mt-0 outline-none text-center max-w-[90vw]" value="LAPICIDE"/>
            <div>
                <div>
                    <p className="mr-">Size</p>
                    <input type="range" min="8" max="24" step="0.1" className="w-[190px] laptop: h-[1px] bg-black appearance-none outline-none landing-intro-range" />
                </div>
                <div>
                    <p>Spacing</p>
                    <input type="range" min="8" max="24" step="0.1" className="w-[190px] laptop: h-[1px] bg-black appearance-none outline-none landing-intro-range" />
                </div>

            </div>
        </section>
    )
}
export default Homepage