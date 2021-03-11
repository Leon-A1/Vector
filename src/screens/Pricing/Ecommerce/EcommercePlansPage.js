import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

export default function WebDevOptions() {
  return (
    <div>
      {/* <PageNavigation /> */}
      <div className="page-header">
        <div className="small-h6-page-navigation">
          <p>המסלולים שלנו בריאקט</p>
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
          <a href="/">עמוד הבית</a>
        </div>
        <h1>המסלולים שלנו בריאקט</h1>
      </div>
      <div className="web-dev-page-content">
        <div className="page-content-header" style={{ width: "100%" }}>
          <h3>React Based Ecommerce Pricing Options</h3>
        </div>
        <div className="two-options-buttons-links">
          <button style={{ backgroundColor: "#e2443f" }}>
            <Link to="/plans/basic">אתרי תדמית</Link>
          </button>
          <button style={{ backgroundColor: "#999999" }}>אתרי מכירות </button>
        </div>
        <div className="three-options-web-dev-image">
          <div className="purple">
            <header>
              <div>
                <p>אתר מכירות בעיצוב אישי</p>
                <h3>GOLD Shop</h3>
                <p>נבנה על מערכת React Woocommerce</p>
                <hr></hr>
              </div>
              <p>
                עיצוב ומבנה האתר מותאמים אישית לצרכי הלקוח עם ממשק ניהול עשיר,
                נוח וידידותי למשתמש. כולל ניהול פרויקט, ייעוץ וליווי עד לעלייה
                לאויר.{" "}
              </p>
              <div className="price">
                <i className="fa fa-ils"></i> <h2>10,800</h2> <span>החל מ</span>
              </div>
            </header>
            <div className="included-services">
              <strong>
                <p>ניהול פרויקט יעוץ וליווי עד עליה לאויר</p>
              </strong>
              <p>עיצוב מותאם לצרכי הלקוח</p>
              <strong>
                {" "}
                <p>סקיצה לעמוד בית ועמוד פנימי – עד 3 סבבי תיקונים</p>
              </strong>
              <p>תמונת אוירה ראשית בעמוד הבית</p>
              <p>תמונת אוירה בעמודים פנימיים</p>
              <strong>
                {" "}
                <p>התקנת תוסף נגישות</p>
              </strong>
              <p>
                הזנת תכנים באתר – עד 25 עמודים (באחריות הלקוח לספק התכנים בפורמט
                דיגיטלי)
              </p>
              <p>יכולת ניהול והוספת עמודים ללא הגבלה ע"י מנהל האתר!</p>
              <p>גלריית תמונות / סרטונים לאתר</p>
              <p>שיתוף וחיבור לרשתות חברתיות</p>
              <p>טופס צור קשר לקבלת פניות מהאתר</p>
              <p>תוסף meta tag / SEO</p>
              <p>שטח אחסון עד 5GB</p>
              <p>נפח תעבורה 30GB</p>
              <p>חיבור לדומיין והעלאת האתר לאויר</p>
              <strong>
                <p style={{ fontWeight: "bold" }}>
                  התקנת רשיון HTTPS לדומיין לשנה
                </p>
              </strong>
              <strong>
                <p style={{ fontWeight: "bold" }}>חיבור PAYPAL</p>
              </strong>
              <p>זמן אספקה 25 ימי עסקים ממועד אישור העיצוב</p>
              <p>שעת הדרכה טלפונית – בהתחברות מרחוק</p>
              <button to="/">הזמן עכשיו</button>
            </div>
          </div>
          <div className="green">
            <header>
              <div>
                <p>אתר מכירות</p>
                <h3>Shop PRO</h3>
                <p>נבנה על מערכת React</p>
                <hr></hr>
              </div>
              <p>
                עיצוב ומבנה האתר על בסיס תבנית פרימיום עם ממשק ניהול עשיר, נוח
                וידידותי למשתמש
              </p>
              <div className="price">
                <i className="fa fa-ils"></i> <h2>5,100</h2>
              </div>
            </header>

            <div className="included-services">
              <p style={{ color: "gray", textDecoration: "line-through" }}>
                ניהול פרויקט יעוץ וליווי עד עליה לאויר
              </p>
              <p>בחירה ממגוון תבניות בעיצוב עכשוי</p>
              <p style={{ color: "gray", textDecoration: "line-through" }}>
                עמוד הבית לאישור, עד 2 סבבי תיקונים
              </p>
              <p>תמונת אוירה ראשית בעמוד הבית</p>
              <p>תמונת אוירה בעמודים פנימיים</p>
              <p>
                <strong>התקנת תוסף נגישות</strong>
              </p>
              <p>
                הזנת תכנים באתר – עד <strong>15</strong> עמודים (באחריות הלקוח
                לספק התכנים בפורמט דיגיטלי)
              </p>
              <p>יכולת ניהול והוספת עמודים ללא הגבלה ע"י מנהל האתר!</p>
              <p>גלריית תמונות / סרטונים לאתר</p>
              <p>שיתוף וחיבור לרשתות חברתיות</p>
              <p>טופס צור קשר לקבלת פניות מהאתר</p>
              <p>תוסף meta tag / SEO</p>
              <p>שטח אחסון עד 5GB</p>
              <p>נפח תעבורה 30GB</p>
              <p>חיבור לדומיין והעלאת האתר לאויר</p>
              <strong>
                <p style={{ fontWeight: "bold" }}>
                  התקנת רשיון HTTPS לדומיין לשנה
                </p>
              </strong>
              <strong>
                <p style={{ fontWeight: "bold" }}>חיבור PAYPAL</p>
              </strong>
              <p>זמן אספקה 25 ימי עסקים ממועד אישור העיצוב</p>
              <p>שעת הדרכה טלפונית – בהתחברות מרחוק</p>
              <button>הזמן עכשיו</button>
            </div>
          </div>
        </div>

        <div className="call-now-container">
          <h2>לשיחה עם יועץ אינטרנט חייגו 053-626-1201</h2>
        </div>

        <h6 style={{ marginTop: 20 }}>* המחירים אינם כוללים מע"מ.</h6>
        <h6 style={{ color: "red", marginBottom: 50 }}>
          * עלות חודשית בגין תחזוקת האתר תתומחר בנפרד.
        </h6>
      </div>
      {/* <PageFooter /> */}
    </div>
  );
}
