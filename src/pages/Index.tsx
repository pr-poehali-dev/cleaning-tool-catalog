import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedPower, setSelectedPower] = useState<string>('all');

  const equipment = [
    {
      id: 1,
      name: 'Пылесос промышленный VacMaster Pro 2000',
      type: 'vacuum',
      brand: 'VacMaster',
      power: '2000W',
      price: '85 000 ₽',
      image: '/img/99844afe-98ee-4caa-9aae-484a64438351.jpg',
      description: 'Профессиональный пылесос для сухой и влажной уборки'
    },
    {
      id: 2,
      name: 'Поломоечная машина CleanBot X1',
      type: 'scrubber',
      brand: 'CleanBot',
      power: '1500W',
      price: '165 000 ₽',
      image: '/img/629e9727-15b3-46d9-9f7d-c3c03f6a44dd.jpg',
      description: 'Автоматическая поломоечная машина для больших площадей'
    },
    {
      id: 3,
      name: 'Экстрактор ковровый CarpetMax Elite',
      type: 'extractor',
      brand: 'CarpetMax',
      power: '1800W',
      price: '125 000 ₽',
      image: '/img/af264972-8994-478d-97cf-fb07055cec57.jpg',
      description: 'Профессиональный экстрактор для чистки ковровых покрытий'
    },
    {
      id: 4,
      name: 'Пылесос VacMaster Compact 1200',
      type: 'vacuum',
      brand: 'VacMaster',
      power: '1200W',
      price: '45 000 ₽',
      image: '/img/99844afe-98ee-4caa-9aae-484a64438351.jpg',
      description: 'Компактный пылесос для небольших помещений'
    },
    {
      id: 5,
      name: 'Поломойка CleanBot Compact',
      type: 'scrubber',
      brand: 'CleanBot',
      power: '1000W',
      price: '95 000 ₽',
      image: '/img/629e9727-15b3-46d9-9f7d-c3c03f6a44dd.jpg',
      description: 'Компактная поломоечная машина для средних помещений'
    },
    {
      id: 6,
      name: 'Экстрактор CarpetMax Standard',
      type: 'extractor',
      brand: 'CarpetMax',
      power: '1300W',
      price: '75 000 ₽',
      image: '/img/af264972-8994-478d-97cf-fb07055cec57.jpg',
      description: 'Стандартный экстрактор для регулярной чистки ковров'
    }
  ];

  const filteredEquipment = equipment.filter(item => {
    return (selectedType === 'all' || item.type === selectedType) &&
           (selectedBrand === 'all' || item.brand === selectedBrand) &&
           (selectedPower === 'all' || item.power === selectedPower);
  });

  const services = [
    {
      title: 'Техническая поддержка',
      description: 'Консультации по выбору и эксплуатации оборудования',
      icon: 'Headphones'
    },
    {
      title: 'Сервисное обслуживание',
      description: 'Профилактика и ремонт оборудования',
      icon: 'Wrench'
    },
    {
      title: 'Обучение персонала',
      description: 'Курсы по работе с клининговым оборудованием',
      icon: 'GraduationCap'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Icon name="Building2" size={32} className="text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">CleanTech Pro</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-gray-600 hover:text-blue-600 transition-colors">Каталог</a>
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Услуги</a>
              <a href="#delivery" className="text-gray-600 hover:text-blue-600 transition-colors">Доставка</a>
              <a href="#certificates" className="text-gray-600 hover:text-blue-600 transition-colors">Сертификаты</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">О компании</a>
              <a href="#contacts" className="text-gray-600 hover:text-blue-600 transition-colors">Контакты</a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Phone" size={16} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Профессиональное клининговое оборудование
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Надежные решения для коммерческой уборки. Широкий выбор оборудования, 
              качественный сервис и быстрая доставка по всей России
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Icon name="Catalog" fallback="Grid3x3" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Icon name="Phone" size={20} className="mr-2" />
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Каталог оборудования</h2>
          
          {/* Filters */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Тип оборудования</label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все типы</SelectItem>
                    <SelectItem value="vacuum">Пылесосы</SelectItem>
                    <SelectItem value="scrubber">Поломоечные машины</SelectItem>
                    <SelectItem value="extractor">Экстракторы</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Бренд</label>
                <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все бренды</SelectItem>
                    <SelectItem value="VacMaster">VacMaster</SelectItem>
                    <SelectItem value="CleanBot">CleanBot</SelectItem>
                    <SelectItem value="CarpetMax">CarpetMax</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Мощность</label>
                <Select value={selectedPower} onValueChange={setSelectedPower}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Любая мощность</SelectItem>
                    <SelectItem value="1000W">1000W</SelectItem>
                    <SelectItem value="1200W">1200W</SelectItem>
                    <SelectItem value="1300W">1300W</SelectItem>
                    <SelectItem value="1500W">1500W</SelectItem>
                    <SelectItem value="1800W">1800W</SelectItem>
                    <SelectItem value="2000W">2000W</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSelectedType('all');
                    setSelectedBrand('all');
                    setSelectedPower('all');
                  }}
                  className="w-full"
                >
                  Сбросить фильтры
                </Button>
              </div>
            </div>
          </div>

          {/* Equipment Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEquipment.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    <Badge variant="secondary">{item.power}</Badge>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">{item.price}</span>
                    <Badge variant="outline">{item.brand}</Badge>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <div className="flex gap-2 w-full">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      В корзину
                    </Button>
                    <Button variant="outline">
                      <Icon name="Heart" size={16} />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Услуги и сервис</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                    <Icon name={service.icon as any} size={32} className="text-blue-600" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="delivery" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="delivery">Доставка и оплата</TabsTrigger>
              <TabsTrigger value="certificates">Сертификаты</TabsTrigger>
              <TabsTrigger value="about">О компании</TabsTrigger>
              <TabsTrigger value="contacts">Контакты</TabsTrigger>
            </TabsList>
            <TabsContent value="delivery" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Truck" size={24} className="mr-2 text-blue-600" />
                    Доставка и оплата
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Способы доставки:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Курьерская доставка по Москве - от 500 ₽</li>
                        <li>• Транспортными компаниями по России - от 1 000 ₽</li>
                        <li>• Самовывоз с нашего склада - бесплатно</li>
                        <li>• Доставка крупногабаритного оборудования - по договоренности</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Способы оплаты:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Банковские карты</li>
                        <li>• Безналичный расчет для юридических лиц</li>
                        <li>• Рассрочка до 12 месяцев</li>
                        <li>• Лизинг оборудования</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="certificates" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Award" size={24} className="mr-2 text-blue-600" />
                    Сертификаты качества
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Вся наша продукция имеет необходимые сертификаты качества и соответствует российским стандартам.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Badge variant="outline" className="justify-center p-3">ISO 9001</Badge>
                    <Badge variant="outline" className="justify-center p-3">CE</Badge>
                    <Badge variant="outline" className="justify-center p-3">ГОСТ Р</Badge>
                    <Badge variant="outline" className="justify-center p-3">EAC</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="about" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Building2" size={24} className="mr-2 text-blue-600" />
                    О компании CleanTech Pro
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Более 10 лет мы специализируемся на поставке профессионального клинингового оборудования 
                    для коммерческих предприятий по всей России.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                      <div className="text-gray-600">Довольных клиентов</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">10</div>
                      <div className="text-gray-600">Лет на рынке</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                      <div className="text-gray-600">Видов оборудования</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="contacts" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="MapPin" size={24} className="mr-2 text-blue-600" />
                    Контактная информация
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Icon name="Phone" size={20} className="text-blue-600" />
                        <span>+7 (495) 123-45-67</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="Mail" size={20} className="text-blue-600" />
                        <span>info@cleantech-pro.ru</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="MapPin" size={20} className="text-blue-600" />
                        <span>Москва, ул. Промышленная, д. 25, стр. 3</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="Clock" size={20} className="text-blue-600" />
                        <span>Пн-Пт: 9:00-18:00, Сб: 10:00-16:00</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Напишите нам</h4>
                      <div className="space-y-3">
                        <Input placeholder="Ваше имя" />
                        <Input placeholder="Телефон" />
                        <Input placeholder="Email" />
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          Отправить запрос
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Building2" size={24} className="text-blue-400" />
                <span className="text-xl font-bold">CleanTech Pro</span>
              </div>
              <p className="text-gray-400">
                Профессиональное клининговое оборудование для вашего бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Пылесосы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Поломоечные машины</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Экстракторы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Аксессуары</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Сервис</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@cleantech-pro.ru</li>
                <li>Пн-Пт: 9:00-18:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CleanTech Pro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;