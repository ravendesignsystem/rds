---
layout: t-docs
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

{%include 'footersitemap/footersitemap.twig'%}

```html
<div class="u-block u-block--black">
	<div class="b-footersitemap">
		<div class="footersitemap__links">
			<div class="u-width-l">
				<div class="footersitemap__columns">
					<div class="footersitemap__column">
						<h2 class="footersitemap__heading">Admissions</h2>
						<ul class="footersitemap__list">
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
						<h2 class="footersitemap__heading">Students / Academics</h2>
						<ul class="footersitemap__list footersitemap__list--two">
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
						<h2 class="footersitemap__heading">Campus</h2>
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
						<h2 class="footersitemap__heading">Ravens for life</h2>
						<ul class="footersitemap__list">
							<li><a href="https://futurefunder.carleton.ca">Giving to Carleton</a></li>
							<li><a href="https://athletics.carleton.ca/">Athletics &amp; Recreation</a></li>
							<li><a href="https://goravens.ca/">Go Ravens - Varsity</a></li>
							<li><a href="https://goravens.ca/"><svg area-hidden="true" width="60" height="76" viewBox="0 0 79 100" xmlns="https://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M44.76 65.605v-53.38C38.6 24.41 26.575 34.466 11.078 41.058c18 7.592 32.44 33.442 33.682 58.747C45.998 74.5 60.443 48.65 78.44 41.057 63.21 45.81 50.97 54.737 44.76 65.605M19.51 14.586c-1.508 1.42-3.54 2.294-5.777 2.294-4.66 0-8.435-3.762-8.435-8.404 0-1.244.28-2.422.77-3.484l6.206-1.15L2.968 0C1.114 2.332 0 5.273 0 8.476 0 16.033 6.15 22.16 13.735 22.16c4.472 0 8.435-2.142 10.942-5.44l-5.168-2.134"/></g></svg><span class="u-visually-hidden">Visit GoRavens.ca</span></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="b-footer-cu-contact">
			<div class="u-width-l">
				<div class="cu-contact__group">
					<div class="cu-contact__item cu-contact__address">
						1125 Colonel By Drive, Ottawa, ON, K1S 5B6, Canada
					</div>
					<div class="cu-contact__item cu-contact__phone">
						<span class="p-tel">Phone: <a href="tel:+1-613-520-2600">1-613-520-2600</a></span>
					</div>
					<div class="cu-contact__item cu-contact__link">
						<a href="https://carleton.ca/about/contact/">Contact Info</a>
					</div>
					<ul class="cu-contact__item cu-contact__item--social">
						<li><a class="u-icon u-icon--circle u-icon--circle-white u-icon--facebook u-icon--s" href="https://www.facebook.com/carletonuniversity/"><svg area-hidden="true" width="24" height="24" viewbox="0 0 24 24"  xmlns="https://www.w3.org/2000/svg"><path d="M17.8 4.8h-2.4s-1.2.216-1.2 1.2v2.4h3.6l-1.2 4.8h-2.4V24H9.4V13.2H7V8.4h2.4V4.8S8.5 0 13.156 0H17.8v4.8z" /></svg><span class="u-visually-hidden">Like us on Facebook</span></a></li>
						<li><a class="u-icon u-icon--circle u-icon--circle-white u-icon--instagram u-icon--s" href="https://www.instagram.com/carleton_u/"><svg area-hidden="true" width="24" height="24" viewbox="0 0 24 24"  xmlns="https://www.w3.org/2000/svg"><path d="M22.29 5.343a.922.922 0 0 1-.922.92h-2.762a.921.921 0 0 1-.921-.92V2.579a.92.92 0 0 1 .92-.92h2.763c.51 0 .922.412.922.92v2.764zm-.184 15.735c0 .568-.458 1.028-1.024 1.028h-18.4c-.566 0-1.024-.46-1.024-1.028V9.764h2.315a8.27 8.27 0 0 0-.269 2.057c0 4.545 3.662 8.229 8.178 8.229 4.517 0 8.178-3.684 8.178-8.229 0-.71-.1-1.399-.268-2.057h2.314v11.314zM12.066 5.527a6.539 6.539 0 1 1 0 13.079 6.54 6.54 0 0 1 0-13.08zM21.186 0H2.763A2.763 2.763 0 0 0 0 2.763v18.421a2.763 2.763 0 0 0 2.763 2.764h18.422a2.763 2.763 0 0 0 2.763-2.764V2.764A2.762 2.762 0 0 0 21.185 0z" /></svg><span class="u-visually-hidden">Follow us on Instagram</span></a></li>
						<li><a class="u-icon u-icon--circle u-icon--circle-white u-icon--twitter u-icon--s" href="https://twitter.com/@Carleton_U"><svg area-hidden="true" width="24" height="24" viewbox="0 0 24 24"  xmlns="https://www.w3.org/2000/svg"><path d="M2.66 14.347a4.64 4.64 0 0 0 2.21-.093c-2.237-.49-3.917-2.646-3.917-5.24v-.066a4.586 4.586 0 0 0 2.209.662C1.852 8.657.992 7.017.992 5.165c0-.979.239-1.892.662-2.686C4.061 5.707 7.66 7.837 11.722 8.063a6.042 6.042 0 0 1-.12-1.218c0-2.95 2.184-5.345 4.883-5.345 1.402 0 2.672.648 3.559 1.693a9.23 9.23 0 0 0 3.109-1.296c-.37 1.244-1.138 2.289-2.144 2.95A9.06 9.06 0 0 0 23.814 4a10.308 10.308 0 0 1-2.447 2.779l.013.688c0 7.065-4.908 15.201-13.892 15.201-2.765 0-5.332-.886-7.488-2.394.37.04.767.066 1.164.066 2.289 0 4.393-.847 6.06-2.29-2.13-.039-3.943-1.587-4.565-3.703z" /></svg><span class="u-visually-hidden">Follow us on Twitter</span></a></li>
						<li><a class="u-icon u-icon--circle u-icon--circle-white u-icon--youtube u-icon--s" href="https://www.youtube.com/user/carletonuvideos"><svg area-hidden="true" xmlns="https://www.w3.org/2000/svg" width="128" height="114" viewBox="0 0 128 128"><g fill="none" fill-rule="evenodd"><path fill="#222" d="M124.367 26.862c-1.45-5.457-5.718-9.753-11.14-11.212C103.401 13 64 13 64 13s-39.401 0-49.227 2.65c-5.421 1.459-9.69 5.755-11.14 11.212C1 36.752 1 57.386 1 57.386S1 78.02 3.633 87.911c1.45 5.456 5.719 9.753 11.14 11.212 9.826 2.65 49.227 2.65 49.227 2.65s39.401 0 49.227-2.65c5.422-1.459 9.69-5.756 11.14-11.212C127 78.021 127 57.386 127 57.386s0-20.634-2.633-30.524"/><path fill="#FFFFFE" d="M51.114 76.121l32.931-18.734-32.931-18.735v37.469"/></g></svg><span class="u-visually-hidden">Subscribe to our Youtube channel</span></a></li>
						<li><a class="u-icon u-icon--circle u-icon--circle-white u-icon--linkedin u-icon--s" href="https://www.linkedin.com/company/sprott/?originalSubdomain=ca"><svg  viewbox="0 0 24 24"  xmlns="https://www.w3.org/2000/svg"><path d="M5.407 23.512H.302V8.154h5.105v15.358zM8.23 8.154h5.105v2.176c.678-1.046 1.89-2.537 4.6-2.537 3.36 0 5.878 2.196 5.878 6.913v8.807H18.71v-8.218c0-2.064-.739-3.472-2.586-3.472-1.41 0-2.25.95-2.62 1.867-.134.328-.167.786-.167 1.245v8.577H8.232s.067-13.917 0-15.358zM2.888.75c1.746 0 2.82 1.147 2.854 2.653 0 1.474-1.108 2.655-2.887 2.655H2.82C1.108 6.058 0 4.878 0 3.403 0 1.897 1.141.75 2.888.75z" /></svg><span class="u-visually-hidden">View us on Linkedin</span></a></li>
						<li><a class="u-icon u-icon--circle u-icon--circle-white u-icon--pinterest u-icon--s" href="https://www.pinterest.ca/carletonu/"><svg area-hidden="true" width="24" height="24" viewbox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M11.085.08C7.123.523 3.173 3.724 3.01 8.296c-.103 2.793.692 4.888 3.352 5.477 1.154-2.034-.372-2.482-.61-3.956-.976-6.03 6.968-10.145 11.126-5.933 2.877 2.916.983 11.885-3.657 10.954-4.445-.892 2.176-8.032-1.372-9.433C8.964 4.265 7.433 8.89 8.8 11.186c-.802 3.951-2.529 7.673-1.83 12.628 2.267-1.642 3.032-4.785 3.658-8.063 1.14.69 1.749 1.408 3.201 1.521 5.358.414 8.351-5.339 7.62-10.65C20.8 1.916 16.098-.48 11.086.08" /></svg><span class="u-visually-hidden">Check us out on Pinterest</span></a></li>
					</ul>
				</div>
			</div>
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

