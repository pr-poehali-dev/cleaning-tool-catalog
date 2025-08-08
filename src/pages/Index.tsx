import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState<string>('all');
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [selectedRating, setSelectedRating] = useState<string>('all');
  const [selectedPrice, setSelectedPrice] = useState<string>('all');

  const companies = [
    {
      id: 1,
      name: 'ЧистоДом Профи',
      rating: 4.9,
      reviewCount: 156,
      price: 'от 1 500 ₽',
      specialization: 'Квартиры и дома',
      city: 'Москва',
      services: ['Генеральная уборка', 'Поддерживающая уборка', 'После ремонта'],
      image: '/img/d9d294e4-a686-4a27-bf74-cb58022f97b2.jpg',
      verified: true,
      responseTime: '15 мин',
      completedOrders: 450
    },
    {
      id: 2,
      name: 'Офис Клин Сервис',
      rating: 4.8,
      reviewCount: 89,
      price: 'от 2 000 ₽',
      specialization: 'Офисы и коммерция',
      city: 'Москва',
      services: ['Ежедневная уборка офисов', 'Мойка окон', 'Химчистка мебели'],
      image: '/img/fede2a7f-2755-4d3d-80d9-d718dc51273a.jpg',
      verified: true,
      responseTime: '30 мин',
      completedOrders: 320
    },
    {
      id: 3,
      name: 'ИндустриКлин',
      rating: 4.7,
      reviewCount: 67,
      price: 'от 5 000 ₽',
      specialization: 'Промышленные объекты',
      city: 'Санкт-Петербург',
      services: ['Промышленная уборка', 'Уборка складов', 'Дезинфекция'],
      image: '/img/77244437-564d-4d89-a40e-5260a8a04ebc.jpg',
      verified: true,
      responseTime: '1 час',
      completedOrders: 180
    },
    {
      id: 4,
      name: 'Эко Чистота',
      rating: 4.6,
      reviewCount: 134,
      price: 'от 1 200 ₽',
      specialization: 'Экологичная уборка',
      city: 'Москва',
      services: ['Эко уборка', 'Детские комнаты', 'Гипоаллергенная уборка'],
      image: '/img/d9d294e4-a686-4a27-bf74-cb58022f97b2.jpg',
      verified: false,
      responseTime: '2 часа',
      completedOrders: 280
    },
    {
      id: 5,
      name: 'БизнесКлин',
      rating: 4.9,
      reviewCount: 203,
      price: 'от 3 000 ₽',
      specialization: 'Корпоративные клиенты',
      city: 'Екатеринбург',
      services: ['Офисная уборка', 'Клининг отелей', 'Уборка ресторанов'],
      image: '/img/fede2a7f-2755-4d3d-80d9-d718dc51273a.jpg',
      verified: true,
      responseTime: '20 мин',
      completedOrders: 650
    },
    {
      id: 6,
      name: 'Домашний Уют',
      rating: 4.5,
      reviewCount: 98,
      price: 'от 1 800 ₽',
      specialization: 'Жилые помещения',
      city: 'Санкт-Петербург',
      services: ['Регулярная уборка', 'Уборка после вечеринок', 'Мытье посуды'],
      image: '/img/d9d294e4-a686-4a27-bf74-cb58022f97b2.jpg',
      verified: true,
      responseTime: '45 мин',
      completedOrders: 390
    }
  ];

  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         company.services.some(service => service.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesService = selectedService === 'all' || company.specialization === selectedService;
    const matchesCity = selectedCity === 'all' || company.city === selectedCity;
    const matchesRating = selectedRating === 'all' || company.rating >= parseFloat(selectedRating);
    const matchesPrice = selectedPrice === 'all' || 
      (selectedPrice === 'budget' && parseInt(company.price.match(/\d+/)?.[0] || '0') < 2000) ||
      (selectedPrice === 'medium' && parseInt(company.price.match(/\d+/)?.[0] || '0') >= 2000 && parseInt(company.price.match(/\d+/)?.[0] || '0') < 4000) ||
      (selectedPrice === 'premium' && parseInt(company.price.match(/\d+/)?.[0] || '0') >= 4000);

    return matchesSearch && matchesService && matchesCity && matchesRating && matchesPrice;
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={`${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Icon name="Sparkles" size={32} className="text-purple-600" />
              <h1 className="text-2xl font-bold text-gray-900">КлинингМаркет</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-purple-600 transition-colors">Услуги</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-purple-600 transition-colors">Как это работает</a>
              <a href="#for-business" className="text-gray-600 hover:text-purple-600 transition-colors">Для бизнеса</a>
              <a href="#help" className="text-gray-600 hover:text-purple-600 transition-colors">Помощь</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline">Войти</Button>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Разместить услуги
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Найдите идеальную клининговую компанию
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Более 500 проверенных компаний. Сравнивайте цены, читайте отзывы и выбирайте лучших
          </p>
          
          {/* Main Search */}
          <div className="bg-white rounded-lg p-6 shadow-lg max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="relative">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  placeholder="Что нужно убрать?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите город" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все города</SelectItem>
                  <SelectItem value="Москва">Москва</SelectItem>
                  <SelectItem value="Санкт-Петербург">Санкт-Петербург</SelectItem>
                  <SelectItem value="Екатеринбург">Екатеринбург</SelectItem>
                  <SelectItem value="Новосибирск">Новосибирск</SelectItem>
                </SelectContent>
              </Select>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Icon name="Search" size={20} className="mr-2" />
                Найти
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select value={selectedService} onValueChange={setSelectedService}>
              <SelectTrigger>
                <SelectValue placeholder="Тип услуги" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все услуги</SelectItem>
                <SelectItem value="Квартиры и дома">Квартиры и дома</SelectItem>
                <SelectItem value="Офисы и коммерция">Офисы и коммерция</SelectItem>
                <SelectItem value="Промышленные объекты">Промышленные объекты</SelectItem>
                <SelectItem value="Экологичная уборка">Экологичная уборка</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={selectedPrice} onValueChange={setSelectedPrice}>
              <SelectTrigger>
                <SelectValue placeholder="Цена" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Любая цена</SelectItem>
                <SelectItem value="budget">До 2 000 ₽</SelectItem>
                <SelectItem value="medium">2 000 - 4 000 ₽</SelectItem>
                <SelectItem value="premium">От 4 000 ₽</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedRating} onValueChange={setSelectedRating}>
              <SelectTrigger>
                <SelectValue placeholder="Рейтинг" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Любой рейтинг</SelectItem>
                <SelectItem value="4.5">4.5+ звезд</SelectItem>
                <SelectItem value="4.7">4.7+ звезд</SelectItem>
                <SelectItem value="4.8">4.8+ звезд</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" onClick={() => {
              setSearchQuery('');
              setSelectedService('all');
              setSelectedCity('all');
              setSelectedRating('all');
              setSelectedPrice('all');
            }}>
              Сбросить фильтры
            </Button>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Найдено {filteredCompanies.length} компаний
            </h3>
            <Select defaultValue="rating">
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">По рейтингу</SelectItem>
                <SelectItem value="price-low">Сначала дешевые</SelectItem>
                <SelectItem value="price-high">Сначала дорогие</SelectItem>
                <SelectItem value="reviews">По отзывам</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredCompanies.map((company) => (
              <Card key={company.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <img 
                      src={company.image} 
                      alt={company.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <CardTitle className="text-lg">{company.name}</CardTitle>
                        {company.verified && (
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                            <Icon name="CheckCircle" size={12} className="mr-1" />
                            Проверено
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 mb-2">
                        <div className="flex items-center space-x-1">
                          {renderStars(company.rating)}
                          <span className="font-semibold ml-1">{company.rating}</span>
                        </div>
                        <span className="text-gray-500">({company.reviewCount} отзывов)</span>
                      </div>
                      <p className="text-gray-600">{company.specialization}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Icon name="MapPin" size={14} className="mr-1" />
                          {company.city}
                        </span>
                        <span className="flex items-center">
                          <Icon name="Clock" size={14} className="mr-1" />
                          Ответ за {company.responseTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {company.services.map((service, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-purple-600">{company.price}</div>
                      <div className="text-sm text-gray-500">{company.completedOrders} заказов выполнено</div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Icon name="Heart" size={16} />
                      </Button>
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                        Заказать
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Как это работает</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Найдите услугу',
                description: 'Используйте поиск и фильтры для выбора подходящей компании',
                icon: 'Search'
              },
              {
                step: '2',
                title: 'Сравните предложения',
                description: 'Изучите рейтинги, отзывы и цены разных исполнителей',
                icon: 'Scale'
              },
              {
                step: '3',
                title: 'Оформите заказ',
                description: 'Свяжитесь с исполнителем и обсудите детали работы',
                icon: 'MessageCircle'
              },
              {
                step: '4',
                title: 'Получите результат',
                description: 'Наслаждайтесь чистотой и оставьте отзыв о работе',
                icon: 'CheckCircle'
              }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 p-4 bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <Icon name={item.icon as any} size={32} className="text-purple-600" />
                </div>
                <div className="mb-2 text-sm font-semibold text-purple-600">ШАГ {item.step}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Популярные услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'Уборка квартир', icon: 'Home', count: '150+ компаний' },
              { name: 'Офисная уборка', icon: 'Building', count: '80+ компаний' },
              { name: 'После ремонта', icon: 'Hammer', count: '90+ компаний' },
              { name: 'Мойка окон', icon: 'Droplets', count: '70+ компаний' },
              { name: 'Химчистка мебели', icon: 'Sofa', fallback: 'Package', count: '45+ компаний' },
              { name: 'Генеральная уборка', icon: 'Sparkles', count: '120+ компаний' },
              { name: 'Уборка складов', icon: 'Package', count: '25+ компаний' },
              { name: 'Клининг отелей', icon: 'Hotel', fallback: 'Building2', count: '30+ компаний' }
            ].map((service) => (
              <Card key={service.name} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Icon name={service.icon as any} fallback={service.fallback as any} size={40} className="text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-500">{service.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* For Business */}
      <section id="for-business" className="py-16 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Для клининговых компаний</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Получайте больше заказов, размещая свои услуги на нашей платформе
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div>Активных заказчиков ежедневно</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">0₽</div>
              <div>Размещение профиля бесплатно</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div>Поддержка исполнителей</div>
            </div>
          </div>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Начать зарабатывать
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Sparkles" size={24} className="text-purple-400" />
                <span className="text-xl font-bold">КлинингМаркет</span>
              </div>
              <p className="text-gray-400 mb-4">
                Крупнейший маркетплейс клининговых услуг в России
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="p-0">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="p-0">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="p-0">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Для клиентов</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Найти услугу</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Гарантии</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Для исполнителей</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Разместить услуги</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Школа клининга</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Поддержка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>8 (800) 555-0123</li>
                <li>help@cleaningmarket.ru</li>
                <li>Пн-Вс: 8:00-22:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 КлинингМаркет. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;