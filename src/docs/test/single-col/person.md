---
layout: docs
title: Profile: Danny Brown
subsite: test
main: null
content: none
banner:
  breadcrumbs:
    grandparent: Tests
---
{% include 'inc' with {'block': 'details-profile'} %}

<div class="u-block u-block--white">
    <div class="b-content">
        <h3>Profile</h3>
        <p>IT leader with 20+ years’ experience using digital technologies to position organizations for success in the ever-changing digital age. As an experienced UX designer and front-end developer, Danny is a unique senior management professional who, in addition to having broad experience in IT strategy and leadership, possesses the strong creative skills and deep technical knowledge necessary to drive teams towards innovative solutions to achieve desired business results.</p>
    </div>
</div>

{% include 'close' %} 
{% from 'listing/listing.twig' import listing %}
{{ listing (
    {
        blockColor: "white",
        blockHeading: "Web Services team members",
        variant: "people",
        items:
        [
            {
                title: "Mike Corkum",
                subtitle: "Senior Web Developer",
                url: "https://carleton.ca/webservices/2019/meet-our-people-mike/",
                img: "https://carleton.ca/webservices/wp-content/uploads/mike-sm-400x400.jpg"
            },
            {
                title: "Michael Ieradi",
                subtitle: "Web Developer",
                url: "https://carleton.ca/webservices/2019/meet-our-people-michael/",
                img: "https://carleton.ca/webservices/wp-content/uploads/Screen-Shot-2019-05-27-at-10.52-1-240x233.gif"
            },
            {
                title: "Andrew Riddles",
                subtitle: "Web Architect",
                url: "https://carleton.ca/webservices/2019/meet-our-people-andrew/",
                img: "https://carleton.ca/webservices/wp-content/uploads/andrew-240x286.jpg"
            },
            {
                img: "https://carleton.ca/webservices/wp-content/uploads/ryan-warner.jpg",
                subtitle: "Senior Web Developer",
                title: "Ryan Warner",
                url: "https://carleton.ca/webservices/2019/meet-our-people-ryan/"
            }
        ]
    }
) }}


