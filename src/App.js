import logo from './logo.svg';
import './App.css';
import Card  from './card';

function App() {
  let pricecard = [{
    word: "Free",
    price: 0,
    details: [
      {
        users: "Single Users",
      },
      {
        users:"5GB Storage"
      },
      {
        users: "Unlimited Public Projects",
      },
      {
        users: "Community Access",
      },
      {
        users: "Unlimited Private Projects",
        onmute : true
      },
      {
        users: "Dedicated Phone Support",
        onmute : true
      },
      {
        users: "Free Subdomain",
        onmute : true
      },
      {
        users: "Monthly Status Reports",
        onmute : true
      }
    ]
  },
  {
    word: "Plus",
    price: 9,
    details: [
      {
        users: "5 Users",
        onbold : true
      },
      {
        users:"50GB Storage"
      },
      {
        users : "Unlimited Public Projects"
      },
      {
        users : "Community Access"
      },
      {
        users : "Unlimited Private Projects"
      },
      {
        users : "Dedicated Phone Support"
      },
      {
        users : "Free Subdomain"
      },
      {
        users: "Monthly Status Reports",
        onmute : true
      }
    ]
  },
  {
    word: "Pro",
    price: 49,
    details: [
      {
        users: "Unlimited Users",
        onbold : true
      },
      {
        users:"150GB Storage"
      },
      {
        users : "Unlimited Public Projects"
      },
      {
        users : "Community Access"
      },
      {
        users : "Unlimited Private Projects"
      },
      {
        users : "Dedicated Phone Support"
      },
      {
        strong: "Unlimited",
        stbold : true,
        users : "Free Subdomain"
        
      },
      {
        users : "Monthly Status Reports"
      }
    ]
  }];
  return (
    <div>
    <section className="pricing py-5">
    <div className="container">
          <div className="row">
            {
              pricecard.map((e) => {
                return <Card priceData={e}/>
              })
            }
          </div>
        </div>
        </section>
    </div>
    
  );
}
export default App;