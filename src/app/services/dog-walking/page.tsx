import BannerSection from "@/сomponents/Section/BannerSection/page";
import ServiceDetailSection from "@/сomponents/Section/ServiceDetailSection/page";

export default function DogWalking() {
    return (
        <>
            <BannerSection 
                backgroundImage={"/images/dog_walking_back.jpg"} 
                title="Вигулювання"
            />
            <ServiceDetailSection
                title="Активні прогулянки"
                subtitle="Щоденна норма активності"
                mainImage="/images/dog_walking_serv1.jpg"
                mainHeading="Вигулювання"
                mainText1="Вигулювання собак – це не просто прогулянка, а важлива частина здорового способу життя вашого улюбленця. Регулярні прогулянки сприяють фізичному розвитку, знижують стрес і підтримують здоров’я серця та суглобів. Професійне вигулювання дозволяє забезпечити вашу собаку необхідною активністю навіть тоді, коли ви зайняті чи не маєте можливості самостійно прогулятися."
                mainText2="Під час вигулювання спеціалісти враховують індивідуальні потреби вашої собаки, її вік, породу та рівень енергії. Це можуть бути спокійні прогулянки для старших собак або активні пробіжки для молодих і енергійних улюбленців. Професійний догляд забезпечує безпеку під час прогулянки, а також дає вашій собаці можливість соціалізуватися та отримати нові враження."
                additionalImages={["/images/dog_walking_serv2.jpg", "/images/dog_walking_serv3.jpg"]}
                bottomText="Вигулювання собак – це чудова можливість забезпечити вашому улюбленцю здоровий та активний спосіб життя. Регулярні прогулянки знижують ризик ожиріння, покращують психічний стан собаки та допомагають уникнути поведінкових проблем, викликаних нестачею фізичної активності. Доглядаючи за вашим чотирилапим другом, ви дбаєте про його здоров’я, гарний настрій і довголіття."
            />
        </>
    );
}