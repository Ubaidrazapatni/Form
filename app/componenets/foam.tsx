function Foam(){
    return(
    
       <div >
    
         <h1 className=" mt-7 text-5xl font-extrabold text-center  ">
            Enter your details</h1>
    
    
             <form className="bg-purple-400 mt-10 flex gap-7 justify-center items-center flex-col border">
    
                
                <input type="name" className=" mt-3 p-3 rounded-2xl w-1/3 border border-red-800" placeholder="Enter your name" />
                <input type="email" className=" p-3 rounded-2xl w-1/3 border border-red-800" placeholder="Enter your email" />
                <input type="password" className="p-3 rounded-2xl w-1/3 border border-red-800" placeholder="Enter your password" /> 
                <input type="number" className="p-3 rounded-2xl w-1/3 border border-red-800" placeholder="Enter your number" /> 
    
                <button className=" py-3 px-6 rounded-2xl
                 bg-purple-800 text-white" > place your order </button>
    
    
                
    
     
            </form>  
    
        </div>    
    
    
    
    );
    
    };

    export default Foam 