import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-wood-light to-wood">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-wood-dark rounded"></div>
              <span className="text-xl font-bold text-wood-darker">
                ЭкоФанера
              </span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a
                href="#products"
                className="text-gray-700 hover:text-wood-darker transition-colors"
              >
                Продукты
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-wood-darker transition-colors"
              >
                О компании
              </a>
              <a
                href="#production"
                className="text-gray-700 hover:text-wood-darker transition-colors"
              >
                Производство
              </a>
              <a
                href="#b2b"
                className="text-gray-700 hover:text-wood-darker transition-colors"
              >
                B2B
              </a>
              <a
                href="#delivery"
                className="text-gray-700 hover:text-wood-darker transition-colors"
              >
                Доставка
              </a>
              <a
                href="#contacts"
                className="text-gray-700 hover:text-wood-darker transition-colors"
              >
                Контакты
              </a>
            </div>
            <Button className="bg-forest text-white hover:bg-forest-dark">
              Каталог
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-forest text-white">
            🌱 Экологически чистая продукция
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-wood-darker mb-6">
            Производитель
            <br />
            <span className="text-forest">ламинированной фанеры</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Высококачественная ламинированная фанера для строительных компаний.
            Минимальная партия от 1 тонны. Прямые поставки с производства.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-wood-dark text-white hover:bg-wood-darker"
            >
              <Icon name="FileText" className="mr-2" />
              Скачать каталог
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-forest text-forest hover:bg-forest hover:text-white"
            >
              <Icon name="Phone" className="mr-2" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-wood-darker mb-12">
            Наша продукция
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-wood-light">
              <CardHeader>
                <div className="w-12 h-12 bg-wood rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Square" className="text-wood-darker" />
                </div>
                <CardTitle className="text-wood-darker">
                  Ламинированная фанера
                </CardTitle>
                <CardDescription>
                  Влагостойкая фанера с ламинированным покрытием
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Толщина: 12-21 мм</li>
                  <li>• Размеры: 1220×2440, 1250×2500</li>
                  <li>• Сорт: I/I, I/II, II/II</li>
                  <li>• Влагостойкость: FSF</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-wood-light">
              <CardHeader>
                <div className="w-12 h-12 bg-forest rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Leaf" className="text-white" />
                </div>
                <CardTitle className="text-wood-darker">
                  Экологичность
                </CardTitle>
                <CardDescription>
                  Сертифицированная экологически чистая продукция
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Класс эмиссии E1</li>
                  <li>• ГОСТ 3916.1-96</li>
                  <li>• FSC сертификация</li>
                  <li>• Безопасные клеи</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-wood-light">
              <CardHeader>
                <div className="w-12 h-12 bg-wood-dark rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Factory" className="text-white" />
                </div>
                <CardTitle className="text-wood-darker">Применение</CardTitle>
                <CardDescription>
                  Широкий спектр строительных решений
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Опалубка для бетона</li>
                  <li>• Каркасное строительство</li>
                  <li>• Мебельное производство</li>
                  <li>• Внутренняя отделка</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* B2B Section */}
      <section
        id="b2b"
        className="py-16 bg-gradient-to-r from-forest-dark to-forest"
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">
                Работаем с B2B клиентами
              </h2>
              <p className="text-xl mb-8">
                Специальные условия для строительных компаний и оптовых
                покупателей
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Truck" className="text-forest-light" />
                  <span>Минимальная партия от 1 тонны</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Percent" className="text-forest-light" />
                  <span>Скидки на крупные заказы</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="text-forest-light" />
                  <span>Быстрые сроки поставки</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="FileCheck" className="text-forest-light" />
                  <span>Работа по договорам</span>
                </div>
              </div>
            </div>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-wood-darker">Оптовые цены</CardTitle>
                <CardDescription>
                  Получите индивидуальное предложение
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">От 1 тонны</p>
                    <p className="text-lg font-semibold text-wood-darker">
                      -5%
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">От 5 тонн</p>
                    <p className="text-lg font-semibold text-wood-darker">
                      -10%
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">От 10 тонн</p>
                    <p className="text-lg font-semibold text-wood-darker">
                      -15%
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">От 50 тонн</p>
                    <p className="text-lg font-semibold text-forest">-20%</p>
                  </div>
                </div>
                <Button className="w-full bg-forest text-white hover:bg-forest-dark">
                  Запросить коммерческое предложение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Company */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-wood-darker mb-6">
                О нашей компании
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Более 15 лет опыта в производстве высококачественной
                ламинированной фанеры. Мы специализируемся на поставках для
                строительных компаний и обеспечиваем стабильное качество
                продукции.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-forest">15+</p>
                  <p className="text-gray-600">лет на рынке</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-forest">500+</p>
                  <p className="text-gray-600">довольных клиентов</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-forest">10000+</p>
                  <p className="text-gray-600">тонн в месяц</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-forest">100%</p>
                  <p className="text-gray-600">контроль качества</p>
                </div>
              </div>
            </div>
            <div className="bg-wood-light rounded-lg p-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Award" className="text-forest" />
                  <span className="text-wood-darker">
                    Сертификаты качества FSC, ГОСТ
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Shield" className="text-forest" />
                  <span className="text-wood-darker">
                    Гарантия на всю продукцию
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Truck" className="text-forest" />
                  <span className="text-wood-darker">
                    Собственная логистика
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Users" className="text-forest" />
                  <span className="text-wood-darker">
                    Персональный менеджер
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production */}
      <section id="production" className="py-16 bg-wood-light">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-wood-darker mb-6">
            Наше производство
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Современное оборудование и строгий контроль качества на каждом этапе
            производства обеспечивают высокие характеристики нашей продукции.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-forest rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="TreePine" className="text-white text-xl" />
              </div>
              <h3 className="font-semibold text-wood-darker mb-2">
                Отбор сырья
              </h3>
              <p className="text-sm text-gray-600">
                Строгий контроль качества древесины
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-forest rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Settings" className="text-white text-xl" />
              </div>
              <h3 className="font-semibold text-wood-darker mb-2">Обработка</h3>
              <p className="text-sm text-gray-600">
                Современные линии производства
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-forest rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Layers" className="text-white text-xl" />
              </div>
              <h3 className="font-semibold text-wood-darker mb-2">
                Ламинирование
              </h3>
              <p className="text-sm text-gray-600">
                Высококачественные покрытия
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-forest rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" className="text-white text-xl" />
              </div>
              <h3 className="font-semibold text-wood-darker mb-2">Контроль</h3>
              <p className="text-sm text-gray-600">Проверка каждого листа</p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section id="delivery" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-wood-darker mb-12">
            Доставка
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <Icon
                  name="Truck"
                  className="w-12 h-12 text-forest mx-auto mb-4"
                />
                <CardTitle className="text-wood-darker">По России</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Доставка в любой регион России собственным автопарком и
                  партнерскими компаниями
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Сроки: 3-7 дней</li>
                  <li>• Страхование груза</li>
                  <li>• Отслеживание доставки</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Icon
                  name="MapPin"
                  className="w-12 h-12 text-forest mx-auto mb-4"
                />
                <CardTitle className="text-wood-darker">Самовывоз</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Забирайте товар напрямую с нашего склада с дополнительной
                  скидкой
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Скидка 3% за самовывоз</li>
                  <li>• Погрузка краном</li>
                  <li>• Работаем без выходных</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Icon
                  name="Package"
                  className="w-12 h-12 text-forest mx-auto mb-4"
                />
                <CardTitle className="text-wood-darker">Упаковка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Надежная упаковка и маркировка для сохранности груза при
                  транспортировке
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Влагозащитная пленка</li>
                  <li>• Деревянные прокладки</li>
                  <li>• Стяжные ремни</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-16 bg-wood-dark text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Icon
                name="Phone"
                className="w-12 h-12 mx-auto mb-4 text-forest-light"
              />
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p className="text-wood-light">+7 (495) 123-45-67</p>
              <p className="text-wood-light">+7 (800) 123-45-67</p>
            </div>
            <div className="text-center">
              <Icon
                name="Mail"
                className="w-12 h-12 mx-auto mb-4 text-forest-light"
              />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-wood-light">info@ekofanera.ru</p>
              <p className="text-wood-light">sales@ekofanera.ru</p>
            </div>
            <div className="text-center">
              <Icon
                name="MapPin"
                className="w-12 h-12 mx-auto mb-4 text-forest-light"
              />
              <h3 className="text-xl font-semibold mb-2">Адрес</h3>
              <p className="text-wood-light">Московская область</p>
              <p className="text-wood-light">
                г. Подольск, ул. Промышленная, 15
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-forest text-white hover:bg-forest-dark"
            >
              <Icon name="MessageCircle" className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-wood-darker text-wood-light py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-forest rounded"></div>
              <span className="text-lg font-semibold">ЭкоФанера</span>
            </div>
            <p className="text-sm text-center md:text-right">
              © 2024 ЭкоФанера. Все права защищены.
              <br />
              Производство и поставка ламинированной фанеры
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
