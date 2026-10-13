/* CHAILAT: all translations (kk / ru / en).
   Edit texts here. Menu prices and structure stay in index.html. */
(function(){
"use strict";
var I18N = {
 kk:{hint:"Тағамды таңдап, себетті официантқа көрсетіңіз",
     food:"ТАҒАМ",drink:"СУСЫН",open:"Себетті ашу",cart:"Себет",
     empty:"Себет бос. Тағамның жанындағы + батырмасын басыңыз.",sub:"Сомасы",svc:"Қызмет көрсету 12%",
     total:"Барлығы",show:"Официантқа көрсету",back:"Өзгерту",clear:"Тазалау",table:"Үстел №",tableShow:"Үстел",
     na:"Бағасын сұраңыз",note:"Бұл онлайн тапсырыс емес. Тізімді официантқа көрсетіңіз.",
     address:"Мекенжайы",hours:"Жұмыс уақыты",phone:"Байланыс",mapBtn:"Қалай жетуге болады?",reviewBtn:"Пікір қалдыру",
     svcInfo:"Қызмет көрсету",svcVal:"Шоттың 12%-ы",
     welcome:"CHAILAT-қа қош келдіңіз! Мұнда хош иісті кофе, шай, дәмді таңғы ас пен ыстық тағамдар сізді күтеді. Қалаған тағамыңызды таңдап, себетті официантқа көрсетіңіз.",
     hook:"Жақыныңмен келіп"},
 ru:{hint:"Выберите блюда и покажите корзину официанту",
     food:"КУХНЯ",drink:"НАПИТКИ",open:"Открыть корзину",cart:"Корзина",
     empty:"Корзина пуста. Нажмите + рядом с блюдом.",sub:"Сумма",svc:"Обслуживание 12%",
     total:"Итого",show:"Показать официанту",back:"Изменить",clear:"Очистить",table:"Стол №",tableShow:"Стол",
     na:"Цену уточняйте",note:"Это не онлайн-заказ. Покажите список официанту.",
     address:"Адрес заведения",hours:"Режим работы",phone:"Контакты",mapBtn:"Как добраться?",reviewBtn:"Оставить отзыв",
     svcInfo:"Обслуживание",svcVal:"12% от суммы счёта",
     welcome:"Добро пожаловать в CHAILAT! Здесь вас ждут ароматный кофе, чай, вкусные завтраки и горячие блюда. Выберите, что хочется, и покажите корзину официанту.",
     hook:"Приходи с близкими в"},
 en:{hint:"Pick your dishes and show the cart to your waiter",
     food:"FOOD",drink:"DRINKS",open:"Open cart",cart:"Cart",
     empty:"Your cart is empty. Tap + next to a dish.",sub:"Subtotal",svc:"Service charge 12%",
     total:"Total",show:"Show to waiter",back:"Edit",clear:"Clear",table:"Table #",tableShow:"Table",
     na:"Ask for the price",note:"This is not an online order. Show the list to your waiter.",
     address:"Address",hours:"Opening hours",phone:"Contacts",mapBtn:"Get directions",reviewBtn:"Leave a review",
     svcInfo:"Service charge",svcVal:"12% of the bill",
     welcome:"Welcome to CHAILAT! Fragrant coffee, tea, tasty breakfasts and hot dishes are waiting for you. Pick what you like and show the cart to your waiter.",
     hook:"Come with your loved ones to"}
};

var INTRO = {
 breakfast:{kk:"Күнді дәмді бастаңыз: жұмыртқа тағамдары, ботқалар және тәтті құймақтар.",ru:"Начните день со вкусного: яичные блюда, каши и сладкие блинчики.",en:"Start your day right: egg dishes, porridges and sweet pancakes."},
 salads:{kk:"Жаңа піскен көкөніс пен нәзік тұздықтардан жасалған жеңіл салаттар.",ru:"Лёгкие салаты из свежих овощей и нежных соусов.",en:"Light salads made with fresh vegetables and delicate dressings."},
 sandwich:{kk:"Тез және тойымды: қол жеткізетін сэндвичтер мен түрлі боулдар.",ru:"Быстро и сытно: сэндвичи и разноцветные боулы.",en:"Quick and filling: sandwiches and colourful bowls."},
 rolls:{kk:"Жаңа дайындалған роллдар: классикалық және фирмалық дәмдер.",ru:"Свежеприготовленные роллы: классика и авторские вкусы.",en:"Freshly made rolls: classics and house favourites."},
 soups:{kk:"Жылы сорпалар мен итальяндық паста — жайлы түскі асқа таптырмас таңдау.",ru:"Тёплые супы и итальянская паста — отличный выбор для уютного обеда.",en:"Warm soups and Italian pasta, perfect for a cosy lunch."},
 pizza:{kk:"Қытырлақ қамырлы, хош иісті пиццалар — достармен бөлісуге ыңғайлы.",ru:"Пицца на хрустящем тесте с ароматной начинкой — удобно делить с друзьями.",en:"Crispy-crust pizzas with aromatic toppings, made for sharing."},
 mains:{kk:"Негізгі тағамдар, гарнирлер және тұздықтар: өз дәміңізге қарай жинаңыз.",ru:"Основные блюда, гарниры и соусы: собирайте по своему вкусу.",en:"Main dishes, sides and sauces: build your own perfect plate."},
 coffee:{kk:"Таңдаулы дәнді кофе: классикалық эспрессодан бастап раф пен фраппучиноға дейін.",ru:"Отборный кофе: от классического эспрессо до рафа и фраппучино.",en:"Carefully chosen coffee: from classic espresso to raf and frappuccino."},
 tea:{kk:"Шай — Chailat жүрегі. Дәстүрлі, жемісті және қытайдың жапырақты шайлары.",ru:"Чай — сердце Chailat. Традиционные, фруктовые и китайские листовые сорта.",en:"Tea is the heart of Chailat: traditional, fruity and Chinese loose-leaf blends."},
 cold:{kk:"Салқын сусындар: жаңа сығылған фреш, лимонад және дәмді смузи.",ru:"Освежающие напитки: свежевыжатые фреши, лимонады и вкусные смузи.",en:"Refreshing drinks: fresh juices, lemonades and tasty smoothies."},
 cocktails:{kk:"Сүтті, алкогольсіз және түтінді коктейльдер — әр сипімде жаңа әсер.",ru:"Молочные, безалкогольные и дымные коктейли — новое впечатление в каждом глотке.",en:"Milkshakes, mocktails and smoked cocktails: a new experience in every sip."}
};

/* Dish names: Kazakh (menu base) -> [Russian, English]. Items not listed (brand names) stay as is. */
var DISH = {
"Солянка":["Солянка", "Solyanka"],
"Филадельфия":["Филадельфия", "Philadelphia"],
"Вареники":["Вареники", "Vareniki"],
"Да Хун Пао":["Да Хун Пао", "Da Hong Pao"],
"Те Гуань Инь":["Те Гуань Инь", "Tie Guan Yin"],
"Жасыл салат және гравлакс албырты қосылған «Бенедикт» тартині": [
"Тартин «Бенедикт» с зелёным салатом и сёмгой гравлакс",
"“Benedict” tartine with green salad and salmon gravlax"
],
"Қытырлақ сыр етті қосылған шакшука": [
"Шакшука с хрустящей ветчиной",
"Shakshuka with crispy cured ham"
],
"Асшаяндар мен қызанақ соусы қосылған омлет": [
"Омлет с креветками и томатным соусом",
"Omelette with shrimp and tomato sauce"
],
"Саңырауқұлақ пен су-вид әдісімен дайындалған жұмыртқа қосылған гречетто": [
"Гречетто с грибами и яйцом су-вид",
"Grechetto with mushrooms and sous-vide egg"
],
"Ағылшын таңғы асы": [
"Английский завтрак",
"English breakfast"
],
"Француз таңғы асы": [
"Французский завтрак",
"French breakfast"
],
"Түрік таңғы асы": [
"Турецкий завтрак",
"Turkish breakfast"
],
"Тауық шұжығы мен саңырауқұлақ соусы қосылған скрэмбл": [
"Скрэмбл с куриной колбаской и грибным соусом",
"Scramble with chicken sausage and mushroom sauce"
],
"Қазақша таңғы ас": [
"Казахский завтрак",
"Kazakh breakfast"
],
"Карамельденген банан қосылған күріш ботқасы": [
"Рисовая каша с карамелизированным бананом",
"Rice porridge with caramelised banana"
],
"Құлпынай тосабы қосылған сұлы ботқасы": [
"Овсяная каша с клубничным вареньем",
"Oatmeal with strawberry jam"
],
"Жаңғақ қосылған манка ботқасы": [
"Манная каша с орехами",
"Semolina porridge with nuts"
],
"Бал қосылған қарақұмық ботқасы": [
"Гречневая каша с мёдом",
"Buckwheat porridge with honey"
],
"Тары ботқасы (майсөк)": [
"Пшённая каша (майсөк)",
"Millet porridge (maisok)"
],
"Бал және қаймақ қосылған құймақ": [
"Блины с мёдом и сметаной",
"Pancakes with honey and sour cream"
],
"Құлпынай тосабы қосылған құймақ": [
"Блины с клубничным вареньем",
"Pancakes with strawberry jam"
],
"Қайнатылған қоюландырылған сүт қосылған құймақ": [
"Блины с варёной сгущёнкой",
"Pancakes with boiled condensed milk"
],
"Таңқурай қосылған сырник": [
"Сырники с малиной",
"Syrniki with raspberries"
],
"Манго тосабы қосылған сырник": [
"Сырники с манговым джемом",
"Syrniki with mango jam"
],
"Құлпынай тосабы қосылған сырник": [
"Сырники с клубничным вареньем",
"Syrniki with strawberry jam"
],
"Таңқурай тосабы қосылған сырник": [
"Сырники с малиновым вареньем",
"Syrniki with raspberry jam"
],
"Тауық еті қосылған круассан-сэндвич": [
"Круассан-сэндвич с курицей",
"Croissant sandwich with chicken"
],
"Тунец қосылған круассан-сэндвич": [
"Круассан-сэндвич с тунцом",
"Croissant sandwich with tuna"
],
"Албырт қосылған сэндвич": [
"Сэндвич с лососем",
"Salmon sandwich"
],
"Жеміс-жидек боулы": [
"Фруктово-ягодный боул",
"Fruit and berry bowl"
],
"Green боул (киноа, қияр, жұмыртқа, алма, брокколи)": [
"Green боул (киноа, огурец, яйцо, яблоко, брокколи)",
"Green bowl (quinoa, cucumber, egg, apple, broccoli)"
],
"Жасыл ролл": [
"Зелёный ролл",
"Green roll"
],
"Кемпірқосақ роллы": [
"Радужный ролл",
"Rainbow roll"
],
"Албырт темпура": [
"Темпура с лососем",
"Salmon tempura"
],
"Тауық еті қосылған пісірілген ролл": [
"Запечённый ролл с курицей",
"Baked roll with chicken"
],
"Жыланбалық қосылған пісірілген ролл": [
"Запечённый ролл с угрём",
"Baked roll with eel"
],
"Жасымықтан жасалған крем-сорпа": [
"Крем-суп из чечевицы",
"Lentil cream soup"
],
"Тауық еті қосылған рамен": [
"Рамен с курицей",
"Chicken ramen"
],
"Ростбиф қосылған рамен": [
"Рамен с ростбифом",
"Roast beef ramen"
],
"Кеспе сорпа": [
"Суп-лапша",
"Noodle soup"
],
"Теңіз өнімдері қосылған том-ям": [
"Том-ям с морепродуктами",
"Tom yum with seafood"
],
"Корольдік асшаяндар қосылған том-ям": [
"Том-ям с королевскими креветками",
"Tom yum with king prawns"
],
"Асқабақтан жасалған крем-сорпа": [
"Тыквенный крем-суп",
"Pumpkin cream soup"
],
"Ысталған сыр еті қосылған Mac 'n' cheese": [
"Mac 'n' cheese с копчёной ветчиной",
"Mac 'n' cheese with smoked ham"
],
"Фетучини Альфредо": [
"Феттучине Альфредо",
"Fettuccine Alfredo"
],
"Спагетти Болоньезе": [
"Спагетти Болоньезе",
"Spaghetti Bolognese"
],
"Лазанья": [
"Лазанья",
"Lasagna"
],
"Спагетти вонголе": [
"Спагетти вонголе",
"Spaghetti alle vongole"
],
"Карбонара": [
"Карбонара",
"Carbonara"
],
"Аз тұздалған албырт қосылған жасыл салат": [
"Зелёный салат со слабосолёным лососем",
"Green salad with lightly salted salmon"
],
"Тунец қосылған нисуаз": [
"Нисуаз с тунцом",
"Niçoise salad with tuna"
],
"Қытырлақ сыр еті қосылған микс-салат": [
"Микс-салат с хрустящей ветчиной",
"Mixed salad with crispy cured ham"
],
"Қытырлақ баклажан": [
"Хрустящие баклажаны",
"Crispy aubergine"
],
"Қызылша мен ешкі ірімшігі қосылған салат": [
"Салат со свёклой и козьим сыром",
"Beetroot and goat cheese salad"
],
"Грек салаты": [
"Греческий салат",
"Greek salad"
],
"Тауық еті қосылған «Цезарь»": [
"«Цезарь» с курицей",
"Caesar with chicken"
],
"Асшаяндар қосылған «Цезарь»": [
"«Цезарь» с креветками",
"Caesar with shrimp"
],
"Фокаччамен бірге берілетін буррата": [
"Буррата с фокаччей",
"Burrata with focaccia"
],
"Ащы пеперони": [
"Острая пепперони",
"Spicy pepperoni"
],
"Кептірілген қызанақ қосылған «Маргарита»": [
"«Маргарита» с вялеными томатами",
"Margherita with sun-dried tomatoes"
],
"Страчателла және тунец қосылған пицца": [
"Пицца со страчателлой и тунцом",
"Pizza with stracciatella and tuna"
],
"Кептірілген сыр еті мен шампиньон қосылған пицца": [
"Пицца с ветчиной и шампиньонами",
"Pizza with cured ham and mushrooms"
],
"Қытырлақ сыр қосылған пицца": [
"Пицца с хрустящим сыром",
"Pizza with crispy cheese"
],
"Жульен пиццасы": [
"Пицца «Жульен»",
"Julienne pizza"
],
"Ірімшік қосылған пицца": [
"Сырная пицца",
"Cheese pizza"
],
"Болоньезе пиццасы": [
"Пицца «Болоньезе»",
"Bolognese pizza"
],
"«Цезарь» пиццасы": [
"Пицца «Цезарь»",
"Caesar pizza"
],
"Гриль көкөністері және BBQ соусы қосылған рибай": [
"Рибай с овощами гриль и соусом BBQ",
"Ribeye with grilled vegetables and BBQ sauce"
],
"Аджапсандал және батат қосылған сыр етінің медальондары": [
"Медальоны из говядины с аджапсандалом и бататом",
"Beef medallions with ajapsandali and sweet potato"
],
"Буға пісірілген күріш қосылған тауық филесі": [
"Куриное филе с рисом на пару",
"Chicken fillet with steamed rice"
],
"Қырылған күріш және цитрусты соус қосылған дорадоның филесі": [
"Филе дорады с рассыпчатым рисом и цитрусовым соусом",
"Sea bream fillet with fluffy rice and citrus sauce"
],
"Гречетто қосылған тауық котлеті": [
"Куриная котлета с гречетто",
"Chicken cutlet with grechetto"
],
"Картоп езбесі қосылған бефстроганов": [
"Бефстроганов с картофельным пюре",
"Beef stroganoff with mashed potatoes"
],
"Сыр еті қосылған жареха": [
"Жареха с ветчиной",
"Zhareha with cured ham"
],
"Сарымсақты картоп езбесі қосылған жылқы етінің медальондары": [
"Медальоны из конины с чесночным картофельным пюре",
"Horse meat medallions with garlic mashed potatoes"
],
"Пісірілген батат және кілегейлі соус қосылған албырт": [
"Лосось с запечённым бататом и сливочным соусом",
"Salmon with baked sweet potato and cream sauce"
],
"Ысталған сыр еті қосылған жареха": [
"Жареха с копчёной ветчиной",
"Zhareha with smoked ham"
],
"Аншылық шұжықтары қосылған жареха": [
"Жареха с охотничьими колбасками",
"Zhareha with hunting sausages"
],
"Усақталған картоп және етті соус қосылған «Джамбо» қабырғасы": [
"Рёбра «Джамбо» с рубленым картофелем и мясным соусом",
"“Jumbo” ribs with diced potatoes and meat sauce"
],
"Тауық нәггетстері": [
"Куриные наггетсы",
"Chicken nuggets"
],
"Ірімшік таяқшалары": [
"Сырные палочки",
"Cheese sticks"
],
"Пармезан қосылған фри картобы": [
"Картофель фри с пармезаном",
"French fries with parmesan"
],
"Пармезан қосылған картоп қайықшалары": [
"Картофельные дольки с пармезаном",
"Potato wedges with parmesan"
],
"Буға пісірілген күріш": [
"Рис на пару",
"Steamed rice"
],
"Қарақұмық": [
"Гречка",
"Buckwheat"
],
"Пісірілген батат": [
"Запечённый батат",
"Baked sweet potato"
],
"BBQ соусы": [
"Соус BBQ",
"BBQ sauce"
],
"Бұрышты соус": [
"Перечный соус",
"Pepper sauce"
],
"Кілегейлі соус": [
"Сливочный соус",
"Cream sauce"
],
"Саңырауқұлақты кілегейлі соус": [
"Грибной сливочный соус",
"Creamy mushroom sauce"
],
"Ірімшік соусы": [
"Сырный соус",
"Cheese sauce"
],
"Кетчуп": [
"Кетчуп",
"Ketchup"
],
"Қаймақ": [
"Сметана",
"Sour cream"
],
"Гуакамоле": [
"Гуакамоле",
"Guacamole"
],
"Тартар соусы": [
"Соус тартар",
"Tartar sauce"
],
"Эспрессо": [
"Эспрессо",
"Espresso"
],
"Қос эспрессо": [
"Двойной эспрессо",
"Double espresso"
],
"Американо": [
"Американо",
"Americano"
],
"Қос американо": [
"Двойной американо",
"Double americano"
],
"Капучино": [
"Капучино",
"Cappuccino"
],
"Қос капучино": [
"Двойной капучино",
"Double cappuccino"
],
"Латте": [
"Латте",
"Latte"
],
"Флэт уайт": [
"Флэт уайт",
"Flat white"
],
"Маршмеллоу қосылған кофе": [
"Кофе с маршмеллоу",
"Coffee with marshmallow"
],
"Бал қосылған раф": [
"Раф с мёдом",
"Honey raf"
],
"Ванильді раф": [
"Ванильный раф",
"Vanilla raf"
],
"Бананды раф": [
"Банановый раф",
"Banana raf"
],
"Классикалық раф": [
"Классический раф",
"Classic raf"
],
"Айс латте": [
"Айс латте",
"Iced latte"
],
"Айс капучино": [
"Айс капучино",
"Iced cappuccino"
],
"Айс американо": [
"Айс американо",
"Iced americano"
],
"Фраппучино": [
"Фраппучино",
"Frappuccino"
],
"Гляссе": [
"Гляссе",
"Glacé coffee"
],
"Кофе Бамбл": [
"Кофе Бамбл",
"Coffee Bumble"
],
"Құлпынай бұлты": [
"Клубничное облако",
"Strawberry cloud"
],
"Шоколадты печенье": [
"Шоколадное печенье",
"Chocolate cookie"
],
"Сникерс": [
"Сникерс",
"Snickers"
],
"Манго креми": [
"Манго-крем",
"Mango cream"
],
"Орео": [
"Орео",
"Oreo"
],
"Көкжидек чизкейкі": [
"Черничный чизкейк",
"Blueberry cheesecake"
],
"Нәзік шабдалы": [
"Нежный персик",
"Delicate peach"
],
"Дубай пістесі": [
"Дубайская фисташка",
"Dubai pistachio"
],
"Алма фреші": [
"Яблочный фреш",
"Apple fresh"
],
"Апельсин фреші": [
"Апельсиновый фреш",
"Orange fresh"
],
"Ананас фреші": [
"Ананасовый фреш",
"Pineapple fresh"
],
"Алма-апельсин": [
"Яблоко-апельсин",
"Apple-orange"
],
"Пайдалы шот": [
"Полезный шот",
"Health shot"
],
"Қызғылт баркыт": [
"Розовый бархат",
"Pink velvet"
],
"Жасыл алма": [
"Зелёное яблоко",
"Green apple"
],
"Ташкентше шай": [
"Ташкентский чай",
"Tashkent tea"
],
"Марокканша шай": [
"Марокканский чай",
"Moroccan tea"
],
"Пряная вишня": [
"Пряная вишня",
"Spiced cherry"
],
"Жидекті шай": [
"Ягодный чай",
"Berry tea"
],
"Тары шай": [
"Пшённый чай",
"Millet tea"
],
"Сүтті шай": [
"Молочный чай",
"Milk tea"
],
"Шабдалы-ромашка шайы": [
"Чай персик-ромашка",
"Peach-chamomile tea"
],
"Жемісті шай": [
"Фруктовый чай",
"Fruit tea"
],
"Таңқурай-базилик шайы": [
"Чай малина-базилик",
"Raspberry-basil tea"
],
"Цитрус-жалбыз шайы": [
"Чай цитрус-мята",
"Citrus-mint tea"
],
"Шырғанақ шайы": [
"Облепиховый чай",
"Sea buckthorn tea"
],
"Фирмалық Chai Latte шайы": [
"Фирменный Chai Latte",
"Signature Chai Latte"
],
"Қара пуэр": [
"Чёрный пуэр",
"Black pu-erh"
],
"Жасыл пуэр": [
"Зелёный пуэр",
"Green pu-erh"
],
"Божественный": [
"Божественный",
"Divine"
],
"Айва-шабдалы": [
"Айва-персик",
"Quince-peach"
],
"Түрік шайы": [
"Турецкий чай",
"Turkish tea"
],
"Апероль": [
"Апероль",
"Aperol"
],
"Түтінді коктейль": [
"Дымный коктейль",
"Smoked cocktail"
],
"Тостағанды ауыстыру": [
"Замена бокала",
"Glass swap"
],
"«Сарқырама» түтінді коктейлі": [
"Дымный коктейль «Водопад»",
"“Waterfall” smoked cocktail"
],
"«Қоян» түтінді коктейлі": [
"Дымный коктейль «Заяц»",
"“Hare” smoked cocktail"
],
"Жемісті түтінді коктейль": [
"Фруктовый дымный коктейль",
"Fruity smoked cocktail"
]
};

window.CHAILAT_I18N = {I18N:I18N, INTRO:INTRO, DISH:DISH};
})();

