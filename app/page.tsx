import HeroBanner from "@/components/home/hero-banner";
import FeatureCard from "@/components/home/feature-card";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full space-y-4 lg:space-y-6">
      <HeroBanner 
        title="New Micro RGB"
        subtitle="The answer to greatness"
        textColor="white"
        src="https://images.samsung.com/is/image/samsung/assets/us/homepage/hp/04142026/1920x1080_Hero_KV.png?imwidth=1366"
        url="https://www.samsung.com/us/tvs/micro-rgb/85-inch-micro-rgb-4k-tv-r95h-sku-mrn85r95hafxza/"
      />

      <HeroBanner 
        title="Galaxy A57 | A37 5G"
        subtitle="Capture the awesome vibe"
        textColor="black"
        src="https://images.samsung.com/is/image/samsung/assets/vn/home/2026/WhatsApp-Image-pc.jpeg?$LazyLoad_Home_JPG$"
        url="https://www.samsung.com/vn/smartphones/galaxy-a/galaxy-a57-5g-awesome-navy-128gb-sm-a576bdbqxxv/buy/"
      />

      <section className="hidden md:grid grid-cols-4 gap-4 lg:gap-6 w-full max-w-screen-2xl mx-auto">
        <FeatureCard 
          title="Galaxy A57 5G"
          src="https://images.samsung.com/is/image/samsung/p6pim/us/sm-a576udbaxaa/gallery/us-galaxy-a57-5g-sm-a576-sm-a576udbaxaa-551691230?$product-details-jpg$"
          url="https://www.samsung.com/vn/"
        />
        <FeatureCard 
          title="Galaxy Z Fold7"
          src="https://res.cloudinary.com/image-cdn-dev/image/upload/q_auto/f_auto/v1776416890/fold7_cc4ogx.png"
          url="https://www.samsung.com/vn/"
        />
        <FeatureCard 
          title="Galaxy Tab S11 Ultra"
          src="https://res.cloudinary.com/image-cdn-dev/image/upload/q_auto/f_auto/v1776416845/tab_s11_p25hj9.png"
          url="https://www.samsung.com/vn/"
        />
        <FeatureCard 
          title="Galaxy Buds4 Pro"
          src="https://res.cloudinary.com/image-cdn-dev/image/upload/q_auto/f_auto/v1776416775/buds4_frjeyh.png"
          url="https://www.samsung.com/vn/"
        />
      </section>

      <HeroBanner 
        title="The Frame Pro"
        subtitle="The answer to your artistic style"
        textColor="black"
        src="https://images.samsung.com/is/image/samsung/assets/us/homepage/hp/04132026/2026-home-feature-kv-the-frame-pc-1440x810_logo.jpg?$1440_N_JPG$"
        url="https://www.samsung.com/us/lifestyle-tvs/the-frame/85-inch-the-frame-pro-neo-qled-4k-tv-ls03hw-sku-qn85ls03hwfxza/"
      />

      <section className="hidden md:grid grid-cols-4 gap-4 lg:gap-6 w-full max-w-screen-2xl mx-auto">
        <FeatureCard 
          title="OLED S95H"
          src="https://images.samsung.com/is/image/samsung/p6pim/us/qn83s95haexza/gallery/us-oled-s95h-qn83s95haexza-551641888?$product-details-jpg$"
          url="https://www.samsung.com/vn/"
        />
        <FeatureCard 
          title="Neo QLED QN80H"
          src="https://images.samsung.com/is/image/samsung/p6pim/us/qn85qn80hafxza/gallery/us-qled-qn80h-qn85qn80hafxza-551478605?$product-details-jpg$"
          url="https://www.samsung.com/vn/"
        />
        <FeatureCard 
          title="Mini LED M80H"
          src="https://stg-images.samsung.com/is/image/samsung/p6pim/us/un85m80hafxza/gallery/us-mini-led-m80h-un85m80hafxza-551365636?$product-details-jpg$"
          url="https://www.samsung.com/vn/"
        />
        <FeatureCard 
          title="Music Studio 7"
          src="https://images.samsung.com/is/image/samsung/p6pim/us/hw-ls70h-za/gallery/us-music-studio7-ls70h-hw-ls70h-za-551891829?$product-details-jpg$"
          url="https://www.samsung.com/vn/"
        />
      </section>

      <HeroBanner 
        title="Enabling better living"
        subtitle="Experience our newest Bespoke appliances"
        textColor="white"
        src="https://images.samsung.com/is/image/samsung/assets/us/homepage/hp/03172026/SDSAC-10406-One-Launch-Upper-Funnel-HP-Feature-KV-DT-1440x810.jpg?$1440_N_JPG$"
        url="https://www.samsung.com/us/home-appliances/bespoke/smart/"
      />

      <section className="hidden md:grid grid-cols-4 gap-4 lg:gap-6 w-full max-w-screen-2xl mx-auto">
        <FeatureCard 
          title="Bespoke Refrigerator"
          src="https://images.samsung.com/is/image/samsung/p6pim/us/rf70h30geraa/gallery/us-rf80h36-rf70h30geraa-582131-rf70h30geraa-551284655?$product-details-jpg$"
          url="https://www.samsung.com/vn/"
        />
        <FeatureCard 
          title="Bespoke Smart Range"
          src="https://res.cloudinary.com/image-cdn-dev/image/upload/q_auto/f_auto/v1776417372/range_droljh.png"
          url="https://www.samsung.com/vn/"
        />
        <FeatureCard 
          title="Bespoke Microwave"
          src="https://res.cloudinary.com/image-cdn-dev/image/upload/q_auto/f_auto/v1776417411/microwave_wbrrlg.png"
          url="https://www.samsung.com/vn/"
        />
        <FeatureCard 
          title="Bespoke AI Laundry"
          src="https://res.cloudinary.com/image-cdn-dev/image/upload/q_auto/f_auto/v1776417448/laundry_ilgz63.png"
          url="https://www.samsung.com/vn/"
        />
      </section>
    </div>
  );
}