import { settings } from "../../utils/icon";
import Button from "../button";
import Organization from "../organization";
function Section3() {
  return (
    <section className="flex flex-col items-center xl:items-stretch max-w-8xl mx-auto px-4 gap-y-20 mb-12">
      <Part1 />
      <Part2 />
      <Organization />
    </section>
  );
}

export default Section3;

function Part1() {
  return (
    <div className="space-y-8">
      <p className="text-3xl font-bold text-center xl:text-left">Технологии</p>
      <div className="space-y-5">
        <Content
          title={"CONTENT-ID"}
          text={
            "Предотвращает широкий спектр угроз, контролирует веб-серфинг, ограничивает несанкционированный доступ к данным и передачу файлов в вашей сети"
          }
        />
        <Content
          title={"USER-ID"}
          text={
            "Предотвращает широкий спектр угроз, контролирует веб-серфинг, ограничивает несанкционированный доступ к данным и передачу файлов в вашей сети"
          }
        />
        <Content
          title={"APP-ID"}
          text={
            "Классифицирует все ваши приложения всё время не зависимо от используемых портов на межсетевом экране, шифрования (SSL или SSH) или техники используемой для предотвращения обнаружения"
          }
        />
      </div>
      <div className="flex flex-col sm:flex-row justify-end text-center">
        <Button
          text={"Все технологии"}
          styleClass={
            "flex shadow-md justify-center items-center gap-x-2 py-3 px-4 bg-teal-500 rounded text-white trasinition-all duration-300 group lg:hover:bg-teal-400"
          }
        />
      </div>
    </div>
  );
}
function Part2() {
  return (
    <div className="space-y-4">
      <p className="text-3xl font-bold">
        Что представляет собой межсетевой экран следующего поколения?
      </p>
      <p>
        Межсетевые экраны следующего поколения (NGFW) фильтруют сетевой трафик
        для защиты организаций от внутренних и внешних угроз. Наряду с
        поддержкой функций межсетевых экранов с проверкой состояния, таких как
        фильтрация пакетов, поддержка IPsec и SSL VPN, мониторинг сети и функции
        сопоставления IP-адресов, решения NGFW включают возможности более
        глубокой проверки содержимого. Эти возможности позволяют выявлять атаки,
        вредоносное ПО и другие угрозы, а также позволяют межсетевым экранам
        NGFW блокировать эти угрозы. Решения NGFW предоставляют организациям
        возможности проверки SSL, контроля приложений, предотвращения вторжений
        и расширенные функции отслеживания всей поверхности атаки. Чтобы
        удовлетворять растущие потребности клиентов, организации должны
        расширяться, размещая различные приложения и внедряя облачные решения
        разных поставщиков. В этих условиях постоянно возникают все новые и
        новые угрозы, и возможности традиционных межсетевых экранов начинают
        отставать от требований по обеспечению полной защиты. Это приводит к
        снижению качества взаимодействия с пользователями и ослаблению системы
        безопасности. Решения NGFW не только блокируют вредоносные программы, но
        и включают возможности для будущих обновлений, обеспечивая гибкость
        развития при расширении спектра угроз и защищая сеть при возникновении
        новых угроз. Межсетевые экраны следующего поколения являются жизненно
        важным компонентом при внедрении системы безопасности сети.
      </p>
    </div>
  );
}

function Content(props) {
  return (
    <div className="flex lg:items-center flex-col lg:flex-row lg:justify-between space-x-4 border-2 rounded-lg p-8 space-y-4 lg:space-y-0">
      <div className="flex items-center space-x-3">
        <div className="w-5 h-5 fill-teal-400">{settings}</div>
        <p className="text-xl font-bold w-32">{props.title}</p>
      </div>

      <p className="max-w-2xl">{props.text}</p>

      <div>
        <Button
          text={"Подробнее"}
          styleClass={
            "flex justify-center items-center space-x-2 py-3 px-6 text-teal-500 border-2 border-teal-500 rounded trasinition-all duration-500 group lg:hover:bg-teal-500 lg:hover:text-white"
          }
        />
      </div>
    </div>
  );
}
