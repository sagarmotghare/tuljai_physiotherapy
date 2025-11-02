export default function HeroSection() {
    return <div
        className="h-screen flex items-center justify-center relative bg-clinic bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/clinic.jpg')" }}
    >
        <div className="absolute inset-0 w-full h-full bg-black/50"></div>
        <div className="relative z-[1] text-center text-white p-8">
            <h1 className="text-5xl mb-4 max-[600px]:text-[2rem]">
                Welcome to Tuljai Physiotherapy Clinic
            </h1>
            <h2 className="text-3xl font-normal mb-8 max-[600px]:text-[1.2rem]">
                तुळजाई फिजिओथेरपी क्लिनिकमध्ये आपले स्वागत आहे
            </h2>
        </div>
    </div>
}