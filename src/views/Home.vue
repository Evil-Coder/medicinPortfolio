<template>
  <div class="home">
    <InfoSection
        heading="Virtual healthcare for you"
        description="Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone"
        button-text="Consult today"
        :image="{src: 'Consult', alt: 'main image'}"
        main-section
    />
    <ServicesSection
        heading="Our services"
        description="We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health"
        :cards="[
            { image: {src: 'Search', alt: 'search image'},
              heading: 'Search doctor',
              description: 'Choose your doctor from thousands of specialist, general, and trusted hospitals' },
            { image: {src: 'Pharmacy', alt: 'pharmacy image'},
              heading: 'Online pharmacy',
              description: 'Buy  your medicines with our mobile application with a simple delivery system' },
            { image: {src: 'Consultation', alt: 'consultation image'},
              heading: 'Consultation',
              description: 'Free consultation with our trusted doctors and get the best recommendations' },
            { image: {src: 'Info', alt: 'details info image'},
              heading: 'Details info',
              description: 'Free consultation with our trusted doctors and get the best recommendations' },
            { image: {src: 'Care', alt: 'emergency care image'},
              heading: 'Emergency care',
              description: 'You can get 24/7 urgent care for yourself or your children and your lovely family' },
            { image: {src: 'Tracking', alt: 'tracking image'},
              heading: 'Tracking',
              description: 'Track and save your medical history and health data' },
        ]"/>
    <InfoSection
        heading="Leading healthcare providers"
        description="Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver"
        button-text="Learn more"
        :image="{src: 'Leading', alt: 'leading image'}"
    />
    <InfoSection
        heading="Download our mobile apps"
        description="Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"
        button-text="Download"
        :image="{src: 'Download', alt: 'Download image'}"
        right-text
        download
    />
    <LatestArticleSection
        heading="Check out our latest article"
        :cards="[
            {image: {src: 'Disease', alt: 'disease image'},
              heading: 'Disease detection, check up in the laboratory',
              description: 'In this case, the role of the health laboratory is very important to do a disease detection...'},
            {image: {src: 'Herbal', alt: 'herbal image'},
              heading: 'Herbal medicines that are safe for consumption',
              description: 'Herbal medicine is very widely at this time because of its very good for your health...'},
            {image: {src: 'Natural', alt: 'natural image'},
              heading: 'Natural care for healthy facial skin',
              description: 'A healthy lifestyle should start from now and for your skin health. There are some...'},
        ]"
    />
    <Footer/>
  </div>
</template>

<script>
import InfoSection from "@/components/Home/InfoSection";
import ServicesCard from "@/components/Home/Services/ServicesCard";
import ServicesSection from "@/components/Home/Services/ServicesSection";
import LatestArticleSection from "@/components/Home/LatestArticle/LatestArticleSection";
import Footer from "@/components/Footer";

export default {
  name: 'Home',
  components: {
    Footer,
    LatestArticleSection,
    ServicesSection,
    InfoSection,
    ServicesCard,

  }
}
</script>

<style lang="sass">
</style>