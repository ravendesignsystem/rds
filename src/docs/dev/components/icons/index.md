---
layout: docs
subsite: dev
title: Icons
menu: dev
section: Components

icons:
- name: accessibility
- name: alert
- name: apple
- name: archive
- name: arrow-down
- name: arrow-left
- name: arrow-right
- name: arrow-up
- name: backpack
- name: beaker
- name: bell
- name: binoculars
- name: blackboard
- name: boardroom
- name: book
- name: bookmark
- name: briefcase
- name: broadcast
- name: browser
- name: bug
- name: buildings
- name: business-card
- name: calendar
- name: cert
- name: check
- name: checklist
- name: chevron-down
- name: chevron-left
- name: chevron-right
- name: chevron-up
- name: circle-slash
- name: circuit-board
- name: clippy
- name: clock
- name: cloud-download
- name: cloud-upload
- name: code
- name: code-snippet
- name: cogs
- name: comment
- name: comment-discussion
- name: compass
- name: credit-card
- name: dash
- name: dashboard
- name: database
- name: desktop-download
- name: device-camera-video
- name: device-camera
- name: device-desktop
- name: device-mobile
- name: diamond
- name: diff-added
- name: diff
- name: dining
- name: documents
- name: dot
- name: ellipsis
- name: eye
- name: facebook
- name: file-binary
- name: file-code
- name: file-directory
- name: file-excel
- name: file-media
- name: file-pdf
- name: file-symlink-directory
- name: file-symlink-file
- name: file-word
- name: file-zip
- name: flame
- name: fold
- name: frame
- name: gavel
- name: gear
- name: gift
- name: globe
- name: grabber
- name: grad
- name: graph
- name: grid
- name: growth
- name: healthcare
- name: heart-hands
- name: heart
- name: history
- name: home
- name: hr
- name: inbox
- name: info
- name: instagram
- name: issue
- name: issue-fixed
- name: italic
- name: jersey
- name: kebab-hor
- name: kebab-vert
- name: key
- name: keyboard
- name: law
- name: light-bulb
- name: line-graph
- name: link-external
- name: link
- name: linkedin
- name: list-ordered
- name: list-unordered
- name: location
- name: lock
- name: mail-read
- name: mail
- name: map
- name: mark-360
- name: mark-cushield
- name: mark-github
- name: mark-ravens
- name: megaphone
- name: mention
- name: milestone
- name: mirror
- name: mountain
- name: mute
- name: newspaper
- name: note
- name: org-chart
- name: package
- name: paintcan
- name: parking
- name: parliament
- name: pencil
- name: person
- name: pin
- name: pinterest
- name: play
- name: play-button
- name: plug
- name: project
- name: pulse
- name: question
- name: quote
- name: radio-tower
- name: reply
- name: report
- name: residence
- name: ribbon
- name: road-sign
- name: rocket
- name: rss
- name: ruby
- name: screen-full
- name: screen-normal
- name: search
- name: secret
- name: server
- name: settings
- name: shield
- name: sign-in
- name: sign-out
- name: smiley
- name: sos
- name: square
- name: squirrel
- name: star
- name: stop
- name: sync
- name: tag
- name: tasklist
- name: telescope
- name: terminal
- name: text-size
- name: theatre
- name: thumbsdown
- name: thumbsup
- name: tools
- name: trashcan
- name: triangle-down
- name: triangle-left
- name: triangle-right
- name: triangle-up
- name: twitter
- name: unfold
- name: unmute
- name: unverified
- name: verified
- name: versions
- name: video-player
- name: watch
- name: x
- name: youtube
- name: zap
---
All of the icons available in RDS are displayed below. To copy an icon's SVG code, hover over the icon and click the 'View/Copy Code' button. To learn how to best work with and integrate these icons into your project, <a href="{{site.url}}dev/custom-theming/icon-system/">view our Icon system documentation</a>.

We would like to give a big shout out to [Gihtub](https://github.com) as the majority of the icons used in RDS are from their [MIT licenced](https://github.com/primer/octicons/blob/master/LICENSE) <a href="https://octicons.github.com">Octoicons project</a>.

{% include 'inc' with {'close': 'true'} %}

<div class="u-block u-block--white">
    <div class="b-cardgrid u-grid u-grid--4">
    {% for item in page.icons %}
        <div class="c-cardlabel">
              <div class="cardlabel__content">
                <figure>
                    {%include 'icons/' ~ item.name ~ '.svg' ignore missing%}
                </figure>
                <div class="cardlabel__label">
                    <h2>{{item.name}}</h2>
                    <button class="c-buttoncta" onclick="copySVG('{{loop.index}}')"> View/Copy code</button>
                </div>
              </div>
        </div><input class="u-visually-hidden" id="svgcode{{loop.index}}"type="text" value='{%include 'icons/' ~ item.name ~ '.svg' ignore missing%}'>
    {% endfor %}
    </div>
</div>

<script>
function copySVG(a) {
	/* Get the text field */
	let copyText = document.getElementById('svgcode'+ a);
	/* Select the text field */
	copyText.select();
	/* Copy the text inside the text field */
	document.execCommand('copy');
	/* Alert the copied text */
	alert('The SVG code below has been copied to your clipboard:\n\n' + copyText.value);
}
</script>
