import reactLogo from "../assets/react.svg"

function Navbar(){
    return(
        //parent div
        <div className="flex flex-row justify-between items-center px-4 py-7 bg-black text-white">
             {/* left child */}
            <div className="flex items-center gap-x-2 px-5">
                <img src= {reactLogo} alt="React-Logo"/>
                <h1 className="text-cyan-400 font-bold text-3xl"> ReactFacts</h1>
            </div>
            {/* right child */}
            <div className="px-9 text-2xl">
                <h2>Project 1</h2>
            </div>
        </div>
    )
}

export default Navbar;