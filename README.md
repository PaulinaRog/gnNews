# GNnews

## Installation

#### _Project built in Vite._

creating vite project

```bash
npm create vite@latest gnNews --template react
```

installation

```bash
npm install
```

SASS

```bash
npm install -D sass
```

React router

```bash
npm install --save react-router-dom
```

Redux

```bash
npm i redux
```

Redux Toolkit

```bash
npm i @reduxjs/toolkit
```

i18next

```bash
npm i i18next
```

i18next backend

```bash
npm i i18next-http-backend
```

---

# ABOUT PROJECT

## _Index page_

#### Default view - language set to polish, articles showing in a form of a list.

![App Screenshot](https://raw.githubusercontent.com/PaulinaRog/gnNews/main/screenshots/main-list.png)

---

#### Fragment of the code

```javascript
export default function Article({ articles }) {
  const [popup, setPopup] = useState({ display: "none" });
  const [id, setId] = useState(null);
  const { displayType, styles } = useSelector((state) => state.display);

  const handleShow = (e) => {
    setPopup({ display: "block" });
    setId(e.target.id);
  };

  const { t } = useTranslation();

  return (
    <>
      <div className="articles-box">
        {articles.map((article, idx) => {
          return (
            <div
              className="articles-single"
              key={article.title}
              style={styles[displayType]}
            >
              {article.urlToImage && displayType === "tiles" ? (
                <img src={article.urlToImage} className="articles-photo" />
              ) : null}
              <div className="articles-content">
                <h4>{article.title}</h4>
                <div className="articles-author-and-time-box">
                  <p>
                    {article.source.id
                      ? article.source.id
                      : article.source.name}
                  </p>
                  <p>
                    {article.publishedAt.substring(0, 10)}{" "}
                    {article.publishedAt.substring(11, 16)}
                  </p>
                </div>
                {article.description && displayType === "tiles" ? (
                  <p>{article.description}</p>
                ) : null}
                <button
                  id={idx}
                  onClick={handleShow}
                  className="popup-close-button"
                >
                  {t("Read")}
                </button>
              </div>
            </div>
          );
        })}
      </div>
```

---

## View change - tiles

#### View after clicking on button in header - changed to tiles, with more details about the article.

![App Screenshot](https://raw.githubusercontent.com/PaulinaRog/gnNews/main/screenshots/main-tiles.png)

---

#### Fragments of the code

```javascript
const initialState = {
  displayType: "list",
  styles: {
    list: { width: "100%" },
    tiles: {
      width: "40%",
      display: "flex",
      flexDirection: "column",
      marginRight: "2%",
    },
  },
};

const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    setDisplayType(state, action) {
      state.displayType = action.payload;
    },
  },
});
```

```javascript
const store = configureStore({
  reducer: {
    display: displayReducer,
  },
});

export default store;
```

---

## Switching to english

#### Language change possible because of the use of i18next

![App Screenshot](https://raw.githubusercontent.com/PaulinaRog/gnNews/main/screenshots/main-en.png)

#### Fragments of the code

```javascript
export default function Index() {
  const [articlesCount, setArticlesCount] = useState(null);

  const lng = localStorage.getItem("language");

  i18next.use(Backend).init({
    lng: lng,
    fallbackLng: "pl",
    react: {
      useSuspense: false,
    },
    backend: {
      loadPath: "../src/i18next/{{lng}}.json",
    },
  });

  return (
    <>
      <I18nextProvider i18n={i18next}>
        <Header />
        <SideMenu />
        <MainContent setArticlesCount={setArticlesCount} />
        <Footer articlesCount={articlesCount && articlesCount} />
      </I18nextProvider>
    </>
  );
}
```

```javascript
{
  content ? (
    <>
      <p>{content.substring(0, 200)}</p>
      <div className="articles-link-box">
        <p>{t("readFull")}:</p>
        <a href={`${url}`}>{t("Read")}</a>
      </div>
    </>
  ) : (
    <>
      <div className="articles-link-box">
        <p>{t("contentError")}: </p>
        <a href={`${url}`}>{t("Read")}</a>{" "}
      </div>
    </>
  );
}
<button onClick={handleClose} className="popup-close-button">
  {t("Close")}
</button>;
```

---

## Popup window

#### Clicking on the read button opens up a popup window with content and link to the artile. Data is downloaded from News API. News from US are set as default.

![App Screenshot](https://raw.githubusercontent.com/PaulinaRog/gnNews/main/screenshots/main-article.png)

#### Fragment of the code

```javascript
export default function MainContent({ setArticlesCount }) {
  const [data, setData] = useState(null);
  const { id } = useParams();

  const getNews = async () => {
    const response = await fetch(
      id
        ? `https://newsapi.org/v2/top-headlines?country=${id}&pageSize=50&apiKey=763da7d371964b079a9d728a1032baf6`
        : "https://newsapi.org/v2/top-headlines?country=us&pageSize=50&apiKey=763da7d371964b079a9d728a1032baf6"
    );
    if (!response.ok) {
      throw new Error("Data could not be fetched!");
    } else {
      return response.json();
    }
  };

  useEffect(() => {
    getNews()
      .then((res) => {
        setData(res);
        setArticlesCount(res.articles.length);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [id]);

```

---

# RWD

---

## List view

## ![App Screenshot](https://raw.githubusercontent.com/PaulinaRog/gnNews/main/screenshots/resp-list.png)

## Tiles view

![App Screenshot](https://raw.githubusercontent.com/PaulinaRog/gnNews/main/screenshots/resp-tiles.png)

---

## Side menu

#### Side menu hidden in mobile view, pops out after tapping on the arrow icon.

![App Screenshot](https://raw.githubusercontent.com/PaulinaRog/gnNews/main/screenshots/resp-sidemenu.png)

---

## Popup window in mobile view

![App Screenshot](https://raw.githubusercontent.com/PaulinaRog/gnNews/main/screenshots/resp-art.png)

## Color Reference and fonts

| Color                     | Hex       |
| ------------------------- | --------- |
| list and tiles background | #e9ecef94 |
| popup window background   | #dee2e6   |
| buttons                   | #ced4da   |
| shadows                   | #adb5bd   |
| shadows                   | #6c757d   |

| Fonts | Name         |
| ----- | ------------ |
|       | 'Montserrat' |

## Icons and photos

- [Pixabay](https://pixabay.com/pl/)
- [Fontawesome](https://fontawesome.com/icons)
- [GoogleFonts](https://fonts.google.com/)
