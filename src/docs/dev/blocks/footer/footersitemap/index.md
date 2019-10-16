---
layout: docs
subsite: dev
title: Sitemap Footer block
banner:
  breadcrumbs:
    grandparent: Blocks
    parent: Footer
meta:
    version: 1.0.0
    status: ready
    handle: footersitemap
    type: Full-width
    section: footer
    path: footersitemap/
    theme: core
dependencies:
    js: n/a
wild: n/a
alternatives: simple
---
## Sitemap Footer block example

The Sitemap Footer helps users and search engines determine how the website is laid out and makes them aware of all your important pages. Having the sitemap in the footer as oppose to on an individual page will save visitors clicks.

{% include 'inc' with {'block': 'footersitemap'} %}

```html
<div class="u-block u-block--black u-block--l">
	<div class="b-footersitemap">
		<div class="footersitemap__links">
			<div class="footersitemap__columns">
				<div class="footersitemap__column">
					<h2>Admissions</h2>
					<ul>
						<li><a href="https://admissions.carleton.ca/programs/">Programs</a></li>
						<li><a href="https://admissions.carleton.ca/">Undergraduate</a></li>
						<li><a href="https://graduate.carleton.ca/">Graduate</a></li>
						<li><a href="https://admissions.carleton.ca/applicant-type/international-applicants/">International</a></li>
						<li><a href="https://carleton.ca/prospective/#anchor3">Professional Development</a></li>
						<li><a href="https://admissions.carleton.ca/campustours/">Campus Tours</a></li>
						<li><a href="https://carleton.ca/awards/">Financial Aid</a></li>
						<li><a href="https://carleton.ca/cie/">Initiatives In Education</a></li>
					</ul>
				</div>
				<div class="footersitemap__column">
					<h2>Students / Academics</h2>
					<ul class="footersitemap__list--two">
						<li><a href="https://students.carleton.ca/">Undergrad Homepage</a></li>
						<li><a href="https://gradstudents.carleton.ca/">Grad Homepage</a></li>
						<li><a href="https://calendar.carleton.ca/">Calendars</a></li>
						<li><a href="https://carleton.ca/cuol/">Carleton Online</a></li>
						<li><a href="https://carleton.ca/cc/">CO-OP &amp; Career Services</a></li>
						<li><a href="https://carleton.ca/culearn/">cuLearn</a></li>
						<li><a href="https://carleton.ca/academics/">Departments &amp; Faculties</a></li>
						<li><a href="https://carleton.ca/discoverycentre/">Discovery Centre</a></li>
						<li><a href="https://carleton.ca/ccs/all-services/email/carleton-student-email/">Email</a></li>
						<li><a href="https://library.carleton.ca/">Library</a></li>
						<li><a href="https://housing.carleton.ca/">Housing</a></li>
						<li><a href="https://carleton.ca/provost/">Provost's Office</a></li>
						<li><a href="https://carleton.ca/registrar/">Registrar's Office</a></li>
						<li><a href="https://carleton.ca/registrar/registration/">Registration</a></li>
						<li><a href="https://carleton.ca/academics/schedules-dates/">Schedules &amp; Dates</a></li>
						<li><a href="https://carleton.ca/academics/support/">Support Services</a></li>
					</ul>
				</div>
				<div class="footersitemap__column">
					<h2>Campus</h2>
					<ul class="footersitemap__list">
						<li><a href="https://carleton.ca/campus/">Campus Map</a></li>
						<li><a href="https://carleton.ca/campus/directions/">Directions</a></li>
						<li><a href="https://events.carleton.ca/">Events</a></li>
						<li><a href="https://carleton.ca/parking/">Parking</a></li>
						<li><a href="https://carleton.ca/safety/">Safety</a></li>
						<li><a href="https://dining.carleton.ca/">Dining Services</a></li>
						<li><a href="https://cusaonline.ca/clubs/">Clubs &amp; Societies</a></li>
					</ul>
				</div>
				<div class="footersitemap__column">
					<h2>Ravens for life</h2>
					<ul class="footersitemap__list">
						<li><a href="https://futurefunder.carleton.ca">Giving to Carleton</a></li>
						<li><a href="https://athletics.carleton.ca/">Athletics &amp; Recreation</a></li>
						<li><a href="https://goravens.ca/">Go Ravens - Varsity</a></li>
						<li><a href="https://goravens.ca/"><svg area-hidden="true" width="60" height="76" viewBox="0 0 79 100" xmlns="https://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M44.76 65.605v-53.38C38.6 24.41 26.575 34.466 11.078 41.058c18 7.592 32.44 33.442 33.682 58.747C45.998 74.5 60.443 48.65 78.44 41.057 63.21 45.81 50.97 54.737 44.76 65.605M19.51 14.586c-1.508 1.42-3.54 2.294-5.777 2.294-4.66 0-8.435-3.762-8.435-8.404 0-1.244.28-2.422.77-3.484l6.206-1.15L2.968 0C1.114 2.332 0 5.273 0 8.476 0 16.033 6.15 22.16 13.735 22.16c4.472 0 8.435-2.142 10.942-5.44l-5.168-2.134"></path></g></svg><span class="u-visually-hidden">Visit GoRavens.ca</span></a></li>
					</ul>
				</div>
			</div>
		</div>

		<div class="footer__contact">
			<address>
				<div>1125 Colonel By Drive, Ottawa, ON, K1S 5B6, Canada</div>
				<span class="p-tel">Phone: <a href="tel:+1-613-520-2600">1-613-520-2600</a></span>
				<div><a href="https://carleton.ca/about/contact/">Contact Info</a></div>
				<ul>
					<li><a class="c-buttonsocial c-buttonsocial--instagram u-icon u-icon--circle" href="https://www.instagram.com/carleton_u"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.29 5.343a.922.922 0 0 1-.922.92h-2.762a.921.921 0 0 1-.921-.92V2.579a.92.92 0 0 1 .92-.92h2.763c.51 0 .922.412.922.92v2.764zm-.184 15.735c0 .568-.458 1.028-1.024 1.028h-18.4c-.566 0-1.024-.46-1.024-1.028V9.764h2.315a8.27 8.27 0 0 0-.269 2.057c0 4.545 3.662 8.229 8.178 8.229 4.517 0 8.178-3.684 8.178-8.229 0-.71-.1-1.399-.268-2.057h2.314v11.314zM12.066 5.527a6.539 6.539 0 1 1 0 13.079 6.54 6.54 0 0 1 0-13.08zM21.186 0H2.763A2.763 2.763 0 0 0 0 2.763v18.421a2.763 2.763 0 0 0 2.763 2.764h18.422a2.763 2.763 0 0 0 2.763-2.764V2.764A2.762 2.762 0 0 0 21.185 0z"></path></svg>
<span class="u-visually-hidden">Follow us on Instagram</span></a></li>
					<li><a class="c-buttonsocial c-buttonsocial--facebook u-icon u-icon--circle" href="https://www.facebook.com/carletonuniversity"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 4.8h-2.4s-1.2.216-1.2 1.2v2.4h3.6l-1.2 4.8h-2.4V24H9.4V13.2H7V8.4h2.4V4.8S8.5 0 13.156 0H17.8v4.8z"></path></svg>
<span class="u-visually-hidden">Like us on Facebook</span></a></li>
					<li><a class="c-buttonsocial c-buttonsocial--twitter u-icon u-icon--circle" href="https://twitter.com/@Carleton_U"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2.66 14.347a4.64 4.64 0 0 0 2.21-.093c-2.237-.49-3.917-2.646-3.917-5.24v-.066a4.586 4.586 0 0 0 2.209.662C1.852 8.657.992 7.017.992 5.165c0-.979.239-1.892.662-2.686C4.061 5.707 7.66 7.837 11.722 8.063a6.042 6.042 0 0 1-.12-1.218c0-2.95 2.184-5.345 4.883-5.345 1.402 0 2.672.648 3.559 1.693a9.23 9.23 0 0 0 3.109-1.296c-.37 1.244-1.138 2.289-2.144 2.95A9.06 9.06 0 0 0 23.814 4a10.308 10.308 0 0 1-2.447 2.779l.013.688c0 7.065-4.908 15.201-13.892 15.201-2.765 0-5.332-.886-7.488-2.394.37.04.767.066 1.164.066 2.289 0 4.393-.847 6.06-2.29-2.13-.039-3.943-1.587-4.565-3.703z"></path></svg>
<span class="u-visually-hidden">Follow us on Twitter</span></a></li>
					<li><a class="c-buttonsocial c-buttonsocial--youtube u-icon u-icon--circle" href="https://www.youtube.com/user/carletonuvideos"><svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="M23.498 6.64a3.016 3.016 0 0 0-2.121-2.135C19.505 4 12 4 12 4s-7.505 0-9.377.505A3.016 3.016 0 0 0 .502 6.64C0 8.524 0 12.454 0 12.454s0 3.93.502 5.815a3.016 3.016 0 0 0 2.121 2.135c1.872.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.016 3.016 0 0 0 2.121-2.135C24 16.385 24 12.454 24 12.454s0-3.93-.502-5.814" fill="#222"></path><path d="M9.546 16.023l6.272-3.568-6.272-3.569z" fill="#fffffe"></path></g></svg>
<span class="u-visually-hidden">Subscribe to our Youtube channel</span></a></li>
					<li><a class="c-buttonsocial c-buttonsocial--linkedin u-icon u-icon--circle" href="https://www.linkedin.com/school/carleton-university"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.407 23.512H.302V8.154h5.105v15.358zM8.23 8.154h5.105v2.176c.678-1.046 1.89-2.537 4.6-2.537 3.36 0 5.878 2.196 5.878 6.913v8.807H18.71v-8.218c0-2.064-.739-3.472-2.586-3.472-1.41 0-2.25.95-2.62 1.867-.134.328-.167.786-.167 1.245v8.577H8.232s.067-13.917 0-15.358zM2.888.75c1.746 0 2.82 1.147 2.854 2.653 0 1.474-1.108 2.655-2.887 2.655H2.82C1.108 6.058 0 4.878 0 3.403 0 1.897 1.141.75 2.888.75z"></path></svg>
<span class="u-visually-hidden">View us on Linkedin</span></a></li>
				</ul>
			</address>
		</div>
	</div>
</div>
```
## Implementation Notes

Include the HTML globally in your footer section. This block should be placed above the [Footer Brand block](../brand/) as the second-last visible block on a page.

## Best Practices

- Don't add too many links. Try and keep the number of links under 50. If you have more pages then this, make sure to be selective and display links to your most important pages.
- Organize you links into clearly labelled categories using the available columns for each category.

## When To Avoid

Avoid using this block if your site does not have many pages in it.

## Resources

- [How to Implement Sitemap Footers to Keep Users Going](https://www.interaction-design.org/literature/article/how-to-implement-sitemap-footers-to-keep-users-going)

