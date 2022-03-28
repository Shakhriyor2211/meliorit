import Image from "next/image";
import Link from "next/link";
function Section() {
  return (
    <>
      <section className="max-w-7xl text-zinc-700 mx-auto mt-24 lg:mt-36 space-y-8 md:space-y-16">
        <div className="flex flex-col xl:flex-row lg:items-center lg:space-x-8 space-y-8 lg:space-y-0">
          <p className="text-2xl sm:text-4xl md:text-5xl font-extrabold max-w-2xl">
            <span className="text-teal-500">Melior-IT</span> — официальный
            дистрибьютор Palo Alto и Fortinet в России
          </p>
          <div className="px-2 w-full h-64 sm:h-85 md:h-95 lg:h-100 xl:h-82">
            <iframe
              className="rounded"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2251.6308998015475!2d37.636630815926296!3d55.64323498052418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab30586d11bf9%3A0x5062c4d5d75329d5!2z0JrQvtGC0LvRj9C60L7QstGB0LrQsNGPINGD0LsuLCA2INGB0YLRgNC-0LXQvdC40LUgOCwg0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8sIDExNTIwMQ!5e0!3m2!1sru!2s!4v1648065957972!5m2!1sru!2s"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl flex flex-col space-y-6">
            <p>
              Melior-IT — со­вре­мен­ная IT-ком­па­ния,
              спе­ци­а­ли­зи­ру­ю­ща­я­ся на продаже оборудования,
              информационной безопасности и системной интеграции. Наша идеология
              — клиентоориентированный подход с применением передовых технологий
              и инструментов.
            </p>
            <p>
              Melior-IT успешно решает значительный спектр задач, необходимый
              для интенсивного развития проектов самых разных отраслевых
              направлений. Мы осуществляем весь необходимый комплекс
              мероприятий, начиная от аудита и консалтинга, заканчивая
              внедрением и самыми специфическими задачами из сферы IT. А также
              поставляем оборудование и ПО, начиная с оснащения рабочих мест, до
              оснащения серверных и центров обработки данных.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-2xl text-zinc-800 lg:max-w-7xl mx-auto my-16 space-y-16">
        <p className="text-center text-xl sm:text-3xl font-semibold px-4">
          Что вы получаете, обращаясь к нам
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 px-12">
          <Part1
            title={"Команду профессионалов"}
            text={
              "Нам удалось собрать коллектив, включающий в себя единомышленников с глубокими знаниями сферы IT. Нас объединяет общая цель и желание предоставлять лучший сервис с заботой о клиенте."
            }
            imageURL={"/image/about/offer 1.png"}
          />
          <Part1
            title={"Надёжного партнёра"}
            text={
              "Мы являемся партнерами самых крупных и известных компаний на рынке. Никогда не станем предлагать непроверенный или некачественный продукт."
            }
            imageURL={"/image/about/offer 2.png"}
          />
          <Part1
            title={"Адекватные цены"}
            text={
              "Всегда предоставляем конкурентные цены на оборудование и ПО, а система персональных скидок приятно вас удивит."
            }
            imageURL={"/image/about/offer 3.png"}
          />
          <Part1
            title={"Комплексные услуги"}
            text={
              "Мы не только продаём оборудование и ПО, мы предоставляем полный спектр услуг от консультаций до реализации трудных и ёмких задач вашего бизнеса."
            }
            imageURL={"/image/about/offer 4.png"}
          />
        </div>
      </section>
      <section className="text-zinc-800 lg:max-w-7xl mx-auto my-12 lg:my-16 space-y-8 lg:space-y-12">
        <Company />
      </section>
      <section className="max-w-2xl text-zinc-800 lg:max-w-7xl mx-auto my-16 space-y-8 lg:space-y-12">
        <p className="text-center text-2xl sm:text-3xl font-semibold">
          Главные качества Meliorit
        </p>
        <div className="space-y-6">
          <Part2
            styleClass={"list-disc max-w-2xl space-y-4 ml-8 lg:ml-none"}
            title={"Ориентированность на клиента"}
            list={[
              "Со всеми клиентами строится долгосрочная программа сотрудничества",
              "Обладаем опытом и возможностями реализации проектов крупного масштаба",
              "Разрабатываем комплексную стратегию развития бизнеса, учитывающую специфику предприятия клиента",
            ]}
          />
          <Part2
            styleClass={"list-disc max-w-2xl space-y-4 ml-8 lg:ml-none"}
            title={"Инновационность"}
            list={[
              "Постоянно открываем новые направления деятельности, осваиваем передовые технологии, которые помогают заказчикам повышать эффективность и развиваться",
              "Мелиорит поддерживает высокотехнологичные проекты, существенно увеличивая их потенциал",
            ]}
          />
          <Part2
            styleClass={"list-disc max-w-2xl space-y-4 ml-8 lg:ml-none"}
            title={"Технологичность"}
            list={[
              "Мелиорит является партнером ведущих мировых производителей высокотехнологичного оборудования, решений и услуг",
              "Специалисты компании обладают уникальными компетенциями, предвидят развитие технологий в соответствии с потребностями рынка и предлагают заказчикам решения, отвечающие их текущим и перспективным потребностям",
            ]}
          />
          <Part2
            styleClass={"max-w-2xl space-y-4 ml-8 lg:ml-0"}
            title={"Открытость"}
            list={[
              "Мы всегда открыты к диалогу. Напишите письмо руководителю MeliorIT, и он лично рассмотрит Ваш вопрос. Чтобы качественно выполнять работу, мы обязаны всегда оставаться открытыми для наших клиентов и партнёров",
            ]}
          />
        </div>
      </section>
      <section className="max-w-2xl text-zinc-800 lg:max-w-7xl mx-auto my-16 lg:my-20 space-y-8 lg:space-y-12">
        <Part3 />
      </section>
    </>
  );
}

export default Section;

function Part1(props) {
  return (
    <div className="flex flex-col items-center space-y-6">
      {props.imageURL && (
        <Image src={props.imageURL} width={180} height={160} alt="about" />
      )}
      <div className="space-y-3">
        <p className="font-bold text-lg text-center">{props.title}</p>
        <p className="text-center">{props.text}</p>
      </div>
    </div>
  );
}

function Part2(props) {
  return (
    <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-24 border-2 rounded-xl p-8">
      <p className="text-xl sm:text-2xl font-semibold lg:w-60">{props.title}</p>
      <ul className={props.styleClass}>
        {props.list.map((list, i) => (
          <li key={i}>{list}</li>
        ))}
      </ul>
    </div>
  );
}

function Part3() {
  return (
    <div className="flex space-x-12 max-w-6xl justify-center">
      <img
        className="hidden lg:block"
        src="/image/about/message.png"
        alt="about"
      />
      <div className="space-y-4 max-w-3xl">
        <p>
          Мы рады каждому новому сотрудничеству с партнёрами и каждому новому
          клиенту.
        </p>
        <p>
          Мы тщательно следим за качеством предоставляемых нами услуг и ваше
          мнение всегда важно для нас. Ваша обратная связь помогает стать нам
          лучше. Если у вас есть рекомендации по улучшению нашей работы, вы
          можете направить их на почту отдела контроля качества
          <Link href="mailto:hello@meliorit.ru">
            <a className="text-teal-500"> hello@meliorit.ru</a>
          </Link>
        </p>
      </div>
    </div>
  );
}

function Company() {
  return (
    <div className="flex space-x-4 justify-center lg:justify-between">
      <div className="space-y-6">
        <p className="text-2xl text-center lg:text-left sm:text-3xl font-semibold">
          О компании
        </p>
        <p className="max-w-2xl lg:pl-8 lg:pr-6 text-center lg:text-left">
          Компания Palo Alto Networks — создатель уникальных межсетевых экранов
          нового поколения. Продукт дает возможность распознать любое
          приложение, не взирая на то, какие способы шифрования используются.
          Кроме того, осуществляется контроль непосредственно пользователей, а
          не IP-адресов. Palo Alto Networks являются лидерами по производству
          систем сетевой безопасности и уже седьмой раз подряд занимают первое
          место среди производителей межсетевых экранов для средних и крупных
          организаций. Благодаря работе специального оборудования и ПО
          достигается высокий уровень безопасности инфраструктуры.
        </p>
      </div>
      <div className="hidden lg:block">
        <img src="/image/about/about.png" alt="about" />
      </div>
    </div>
  );
}
