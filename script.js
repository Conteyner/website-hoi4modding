
<thead><tr>
<th class="headerSort headerSortUp" tabindex="0" role="columnheader button" title="Упорядочить по убыванию">Command
</th>
<th class="headerSort" tabindex="0" role="columnheader button" title="Упорядочить по возрастанию">Effect
</th>
<th class="headerSort" tabindex="0" role="columnheader button" title="Упорядочить по возрастанию">Example/Comment
</th></tr></thead><tbody>


























































<tr id="add_autonomy">
<td>add_autonomy [&lt;Target Country Tag&gt;] [num]
</td>
<td>Changes a country's autonomy level
</td>
<td>add_autonomy PHI -200
</td></tr><tr id="add_core">
<td>add_core &lt;state_id&gt;
</td>
<td>Adds cores
</td>
<td>
</td></tr><tr id="add_equipment">
<td>add_equipment(ae) [&lt;equipment amount&gt;] [&lt;equipment name&gt;]
</td>
<td>Adds equipment
</td>
<td>Equipment uses the basic name so 'ae 1000 infantry_equipment_1'.You can only add researched equipment. Does not support Naval equipment. (with the exception of convoy: 'ae 1000 convoy_1') To add ships, consider using instantconstruction(ic) (ic also effects AI).
<p>To add modified equipment, you have to address it by given name. Example: You create a variant of 'Matilda LP'-tank with better Armor and Main Gun and name it 'Matilda LP Mk. IV'.
Now use 'add_equipment 1000 Matilda LP Mk. IV'.
</p>
</td></tr><tr id="add_ideas">
<td>add_ideas [&lt;idea name&gt;]
</td>
<td>Adds ideas with &lt;id&gt; to the country
</td>
<td>
</td></tr><tr id="add_latest_equipment">
<td>add_latest_equipment(ale) [&lt;equipment amount&gt;]
</td>
<td>Gives player amount of latest equipment variants
</td>
<td>To add only a specific type of your latest equipment, you have to address it's given name. Example: You create a variant of 'Matilda LP'-tank with better Armor and Main Gun and name it 'Matilda LP Mk. IV'.
<p>Now use 'add_latest_equipment 1000 Matilda LP Mk. IV'.
</p>
</td></tr><tr id="add_opinion">
<td>add_opinion [&lt;Country tag&gt;]
</td>
<td>Add opinion to/from tag
</td>
<td>Adds 100 opinion (hardcoded number) to and from target country (add_opinion ENG for instance). A successfull call prints "&lt;country&gt; have 100 more opinion about you" and it appears as "cheat_opinion_modified_good" in the diplomacy screen
</td></tr><tr id="add_party_popularity">
<td>add_party_popularity &lt;ideology group&gt; &lt;value&gt;
</td>
<td>Adds party popularity
</td>
<td>ideology group has shortcuts d f n c for vanilla HOI groups.
</td></tr><tr id="add_war_support">
<td>add_war_support(ws) [&lt;amount&gt;]
</td>
<td>Adds War Support
</td>
<td>ws 100 (capped at 100)
</td></tr><tr id="Agency.Autocomplete">
<td>Agency.Autocomplete
</td>
<td>Instantly completes agency upgrades
</td>
<td>
</td></tr><tr id="Agency.Instant">
<td>Agency.Instant
</td>
<td>Makes everything regarding agencies instant.
</td>
<td>Equivalent to a combination of Operation.Instant, IntelNetwork.Instant, Agency.InstantSlotUnlock, and Agency.Autocomplete
</td></tr><tr id="Agency.InstantSlotUnlock">
<td>Agency.InstantSlotUnlock
</td>
<td>Removes wait time between agent recruits
</td>
<td>
</td></tr><tr id="agency">
<td>agency.keepexcessoperatives
</td>
<td>
</td>
<td>
</td></tr><tr id="ai_accept">
<td>ai_accept
</td>
<td>AI will accept all diplomatic offers
</td>
<td>
</td></tr><tr id="allowdiplo">
<td>allowdiplo(adiplo,nocb)
</td>
<td>Allows to use all diplomatic actions for no matter the rules. (Can declare war without justification)
</td>
<td>This is likely the most effective way of wanting to start a war <b>without</b> needing to wait for the justification. If you only want instant justification and not the extra options it comes with, then use (instant_wargoal).
</td></tr><tr id="allowtraits">
<td>allowtraits
</td>
<td>Allows free assignment of general traits
</td>
<td>
</td></tr><tr id="annex">
<td>annex [&lt;Target Country Tag&gt; or "all"]
</td>
<td>Begin annex/annexes the specified tag
</td>
<td>annex USA or annex d01 or annex all
</td></tr><tr id="civilwar">
<td>civilwar [&lt;ideology&gt;] [&lt;target country tag&gt;]
</td>
<td>Spawns a civil war
</td>
<td>civilwar fascism ENG&nbsp;:
<p>Other Valid ideologies "communism" "democratic" "neutrality"
</p>
</td></tr><tr id="compliance">
<td>compliance
</td>
<td>Increases compliance in the selected province in game by set amount
</td>
<td>ex: (selects one of the provinces in Danzig) compliance 100
</td></tr><tr id="cp">
<td>cp [&lt;amount&gt;]
</td>
<td>Adds Command Power
</td>
<td>cp 100 (capped at 100)
</td></tr><tr id="debug_crash">
<td>debug_crash(crash)
</td>
<td>Crashes the game.
</td>
<td>
</td></tr><tr id="debug_nuking">
<td>debug_nuking
</td>
<td>Allows to nuke every province without checking any conditions.
</td>
<td>
</td></tr><tr id="Decision.FastRemove">
<td>Decision.FastRemove
</td>
<td>Shortens decisions to 1 day
</td>
<td>
</td></tr><tr id="Decision.NoChecks">
<td>Decision.NoChecks
</td>
<td>Ignores decision requirements
</td>
<td>Also disables cost, affects AI
</td></tr><tr id="deleteallunits">
<td>deleteallunits(delall) [country]
</td>
<td>Delete all armies and fleets of the specified countries.
</td>
<td>deleteallunits SPR
</td></tr><tr id="deleteallunitsbut">
<td>deleteallunitsbut(delallbut) [country]
</td>
<td>Delete all countries' armies and fleets, with the exception of one country.
</td>
<td>delallbut SPR
</td></tr><tr id="nu">
<td>eval_effect [effect]
</td>
<td>Allows you to run more complex effects from script in the console directly. Select state for state run scope, no scope = country scope
</td>
<td>ex: Select Danzig state -&gt; eval_effect POL_remove_danzig_effect = yes
<p>Removes the Danzig modifier from Danzig if that state is selected
</p>
</td></tr><tr id="event">
<td>event [&lt;event id&gt;] [Target country tag]
</td>
<td>Executes an event
</td>
<td><a href="/Events#Event_pages" title="Events">Event pages</a> can be used to tell the IDs of events. If the event has a <code>trigger = { ... }</code> block, it says which triggers were met and which weren't.
</td></tr><tr id="Focus.AutoComplete">
<td>Focus.AutoComplete (fa)
</td>
<td>Allows national focuses to be instantly finished
</td>
<td>Affects AI
</td></tr><tr id="Focus.IgnorePrerequisites">
<td>Focus.IgnorePrerequisites
</td>
<td>Ignores focus prerequisites
</td>
<td>Allows you to start a focus in the middle of the tree. Affects AI
</td></tr><tr id="Focus.NoChecks">
<td>Focus.NoChecks
</td>
<td>Ignores focus requirements
</td>
<td>Affects AI
</td></tr><tr id="force_operative_detection">
<td>force_operative_detection
</td>
<td>Your operatives/spies will be detected
</td>
<td>
</td></tr><tr id="fuel">
<td>fuel [&lt;amount&gt;]
</td>
<td>Adds Fuel
</td>
<td>fuel 100000 (capped at your deposits capacity, adding much more will result in decreasing fuel)
</td></tr><tr id="gain_xp">
<td>gain_xp [&lt;amount&gt;]
</td>
<td>Adds experience to selected Leader/General/Admiral
</td>
<td>gain_xp 100000(level capped at 9)
</td></tr><tr id="gain_xp">
<td>gain_xp [&lt;trait&gt;]
</td>
<td>Adds <b>gainable</b> trait to selected Leader/General/Admiral
</td>
<td>ie: gain_xp seawolf<br>
<p><b>Note</b> To make it work with new, generic created Admirals:<br>
1. Open <i> 'Documents\Paradox Interactive\Hearts of Iron IV\settings.txt' </i> with a text editor and change "save_as_binary=yes" to "save_as_binary=no".<br>
2. Start game, load savegame and save as new file, exit game.<br>
3. Open <i> 'Documents\Paradox Interactive\Hearts of iron IV\Save Games' </i>, open the newly created savegame file, search (CTRL-F) for the name of your generic created Admiral <br>
4. Go a few lines below to <b>max_traits=0.000</b> and add the following code block behind it
</p>
<pre>			in_progress={
				seawolf=0.000
				superior_tactician=0.000
				spotter=0.000
				fly_swatter=0.000
				ironside=0.000
				air_controller=0.000
			}
</pre>
<p>5. Make sure to save the file with <b>ANSI</b> encoding format.<br>
6. Start game, load save game, use gain_xp command, enjoy.<br>
(Optional turn back on binarization in settings.txt)
</p>
</td></tr><tr id="help">
<td>help [command name]
</td>
<td>Print out all console commands or a specific command description.
</td>
<td>
</td></tr><tr id="instant_prepare">
<td>instant_prepare
</td>
<td>Instantly prepares naval invasions
</td>
<td>Only works in debug mode.
</td></tr><tr id="instantconstruction">
<td>instantconstruction (ic)
</td>
<td>Toggles instant construction cheat.
</td>
<td>Affects AI. Ships are also constructed instantly.
</td></tr><tr id="instanttraining">
<td>instanttraining (it)
</td>
<td>Instantly trains divisions and ships
</td>
<td>Affects AI
</td></tr><tr>
<td>it is time operation moscow
</td>
<td>Activates instant army building
</td>
<td>Only affects player
</td></tr><tr id="manpower">
<td>manpower [amount]
</td>
<td>Adds manpower to player
</td>
<td>Defaults to 10 million if the number isn't specified.
</td></tr><tr id="nuke">
<td>nuke [number]
</td>
<td>Adds nukes
</td>
<td>Add 100 or 1000
</td></tr><tr id="observe">
<td>observe(spectator)
</td>
<td>Switches to play no country at all, and no longer shows messages or pauses the game. However, it also interferes with AI performance and is not a good indication of what the AI will do if observe mode is not used.
</td>
<td>
</td></tr><tr id="occupationpaint">
<td>occupationpaint(op)
</td>
<td>Toggles occupation painting. If used with country tag occupies all of their owned, not controlled, land,
</td>
<td>op JAP
</td></tr><tr id="pp">
<td>pp(fuhrer_mana,political_power) [PP amount]
</td>
<td>Gives(or removes) political power to player
</td>
<td>Defaults to 1000 if the amount is unset.
</td></tr><tr id="prevent_operative_detection">
<td>prevent_operative_detection
</td>
<td>Your operatives/spies won't be detected anymore
</td>
<td>
</td></tr><tr id="puppet">
<td>puppet [&lt;Puppeteer Country Tag&gt;] [&lt;Puppet Target Country Tag&gt;]
</td>
<td>Turns the target country into a puppet of the puppeteer
</td>
<td>puppet GER CZE (Czechoslovakia becomes a puppet of German Reich)
</td></tr><tr id="remove_ideas">
<td>remove_ideas [&lt;idea name&gt;]
</td>
<td>Removes national idea.
</td>
<td>
</td></tr><tr id="research">
<td>research [&lt;slot id&gt; or "all"]
</td>
<td>Researches a technology from research slot or all.
</td>
<td>Research all will instant research all technologies
</td></tr><tr id="research_on_icon_click">
<td>research_on_icon_click
</td>
<td>Research a technology when clicking on technology tree icon
</td>
<td>Will Allow you to research an item without its prerequisite or two mutually exclusive items
</td></tr><tr id="resistance">
<td>resistance
</td>
<td>Increases resistance in the selected province by set amount
</td>
<td>ex: (selects one of the provinces in Berlin) resistance 100
</td></tr><tr id="set_ruling_party">
<td>set_ruling_party &lt;ideology group&gt;
</td>
<td>Sets ruling party
</td>
<td>ideology group has shortcuts d f n c for vanilla HOI groups.
</td></tr><tr id="setcontroller">
<td>setcontroller [&lt;country tag&gt;] [province id]
</td>
<td>Sets province controller
</td>
<td>
</td></tr><tr id="setowner">
<td>setowner [&lt;country tag&gt;]
</td>
<td>Sets state owner
</td>
<td>Select the state you would like to set owner as. Select a state by clicking it. You need to click the state as the state id no longer works.
</td></tr><tr id="st">
<td>st [&lt;amount&gt;]
</td>
<td>Adds Stability
</td>
<td>st 100 (capped at 100)
</td></tr><tr id="tag">
<td>tag [&lt;Country tag&gt;]
</td>
<td>Changes the country that the player controls.
</td>
<td>
</td></tr><tr id="tdebug">
<td>tdebug
</td>
<td>Toggles Debug info
</td>
<td>Helpful for finding nation tags and ID's
</td></tr><tr id="teleport">
<td>teleport(tp)
</td>
<td>Activates the Teleportation tool
</td>
<td>Can teleport units where ever you tell them to go
</td></tr><tr id="whitepeace">
<td>whitepeace(wp) [&lt;country tags&gt;]
</td>
<td>White peace with the specified countries.
</td>
<td>
</td></tr><tr id="xp">
<td>xp [&lt;XP amount&gt;]
</td>
<td>Gives Army, navy and air experience to player
</td>
<td>Can be used once per day
</td></tr></tbody><tfoot></tfoot>