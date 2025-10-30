import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, world</h1>);

function showMoreInfo() {
    const infoBox = document.getElementById("nathanRicknerInfo");
    infoBox.innerHTML = `
      <h3>About Nathan Rickner</h3>
      <p>\tHey there,\n
Thanks so much for visiting our church’s website! I’d love to personally invite you to come and
be part of one of our services. But before you do, let me take a moment to introduce myself.
I had the great privilege of growing up in a Christian home. My family was deeply involved in
ministry—whether in full-time roles or as faithful volunteers. From Sunday school classes to
children’s programs and community outreach, we were always doing something to serve the
Lord.
However, despite all that involvement, I came to realize something vital: none of that could get
me to heaven. I had to personally come to the understanding that I was a sinner in need of a
Savior. At the age of fifteen, I trusted Jesus Christ as my personal Savior. That decision
changed my life forever.
Shortly after my salvation, I sensed God’s call to serve Him in full-time ministry. Following high
school, I attended Hyles-Anderson College, where I received foundational ministry training and
deepened my walk with the Lord. I’m truly grateful for all that God taught me during those years.
Since graduating in 2012, I’ve had the opportunity to serve in various ministry roles—as a youth
pastor, Christian school teacher, coach, mentor, and preacher. Each role has allowed me to
grow and pour into the lives of others, and I count it a privilege to serve God’s people.
Outside of my salvation, the greatest blessing of my life is my beautiful wife. She’s not only the
love of my life, but also an incredible partner in ministry. God has also blessed us with a
beautiful daughter Adalynn, who brings so much joy to our lives.
Thanks again for stopping by. I truly hope to meet you soon, hear your story, and get to know
you personally. Until then, may God bless you and guide your steps.</p>`;
    infoBox.style.display = "block";
}
