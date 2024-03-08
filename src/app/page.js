import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#1f2937]">
      <div>
      <h1 className="text-white text-center font-bold text-2xl py-6">LOGIN</h1> 
      <img src="login.jpg"/>
      <form className="flex flex-col  gap-y-3 items-center ">
          <label for="email" className="label text-white">EMAIL</label>
          <input type="email "className="w=1/2 p-3 rounded-lg text-center font-bold text-lg"/>
          <label for="senha" className="label text-white">SENHA</label>
          <input type="password"className="w=1/2 p-3 rounded-lg text-center font-bold text-lg"/>
          
          <button type="submit" className="bg-green-700 px-8 py-3 rounded-lg font-bold text-white text-lg hover:bg-green-900 transition-all duration-300 ease-in-out">LOGIN</button>
      </form>
      </div>
    </main>
  );
}
