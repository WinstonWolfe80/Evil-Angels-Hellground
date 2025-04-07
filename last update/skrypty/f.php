<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Formularz do skopiowania</title>
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
</head>
<body>

<?php
	
function f1($txt, $quest)
{
$answ = "nie";
if($quest=="Tak")
	{
	$answ =  "[color=green]tak[/color].";
	}
	else
	{
	$answ =  "[color=red]nie[/color].";
	}
print $txt;
print "$answ<br>";
}
	//tresc stronki
	//dziwne kosy w srodku wyrazow to kody ascii polskich liter /php ich nie trawi/
	
	print "Na forum Evil Angels w dziale Rekrutacja stw&#243;rz nowy temat.</br>";
	print "Nadaj mu temat: 'Nick - klasa typ' (np. 'Shamaneya - shaman resto')</br>";
	print "Poni&#380;szy tekst skopiuj i wlkej w tre&#347;ci posta.";

	print "<br><br><br>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~";

	print "<br><br><br>[color=orange][b]Informacje o postaci:[/b][/color]<br>";

	print "<br>[b]Nick:[/b] ";
		print "[color=magenta]";
		print $_POST['nick'];
		print "[/color]";
	
	print "<br>[b]Specjalizacja:[/b] ";
		print $_POST['spec'];
	
	print "<br>[b]Rasa:[/b] ";
		print $_POST['race'];
	
	print "<br>[b]Klasa:[/b] ";
		print $_POST['class'];
	
	print "<br>[b]Link do armory:[/b] ";
		print "[url=";
		print $_POST['armory'];
		print "]click[/url]";
	
	print "<br>[b]Link do UI:[/b] ";
		print "[url=";
		print $_POST['ui'];
		print "]click[/url]";
		
	print "<br>[b]Link do ekranu logowania:[/b] ";
		print "[url=";
		print $_POST['alts'];
		print "]click[/url]";

	print "<br>[b]Inne postacie na HG:[/b] ";
		print $_POST['alts2'];
	
	print "<br><br><br>[color=orange][b]Do&#347;wiadczenie:[/b][/color]<br>";
	
	print "<br>[b]Jak d&#322;ugo grasz w WoW'a:[/b]<br>  ";
		print $_POST['wowtime'];
	
	print "<br>[b]Posiadane resi sety:[/b]<br>";
	f1("Shadow: ", $_POST['shadow']);
	f1("Fire: ", $_POST['fire']);
	
	print "<br>[b]Znajomo&#347;&#263; taktyk (praktyczna na HG):[/b]<br>";
	print "<br>[b]Tier 5:[/b]";
		print "<br>[b]Serpentshrine Cavern:[/b]<br>";
			f1("Hydross the Unstable: ", $_POST['ssc_hyd']);
			f1("The Lurker Below: ", $_POST['ssc_lur']);
			f1("Leotheras the Blind: ", $_POST['ssc_leo']);
			f1("Fathom-Lord Karathress: ", $_POST['ssc_fat']);
			f1("Morogrim Tidewalker: ", $_POST['ssc_mor']);
			f1("Lady Vashji: ", $_POST['ssc_vas']);
		print "<br>[b]The Eye:[/b]<br>";
			f1("Al'ar: ", $_POST['te_ala']);
			f1("Void Reaver: ", $_POST['te_voi']);
			f1("High Astromancer Solarian: ", $_POST['te_sol']);
			f1("Kael'thas Sunstrider: ", $_POST['te_kae']);
	print "<br>[b]Tier 6:[/b]";
		print "<br>[b]Battle for Mount Hyjal:[/b]<br>";
			f1("Rage Winterchill: ", $_POST['mh_rag']);
			f1("Anetheron: ", $_POST['mh_ane']);
			f1("Kaz'rogal: ", $_POST['mh_kaz']);
			f1("Azgalor: ", $_POST['mh_azg']);
			f1("Archimonde: ", $_POST['mh_arc']);
		print "<br>[b]Black Temple:[/b]<br>";
			f1("High Warlord Naj'entus: ", $_POST['bt_naj']);
			f1("Supremus: ", $_POST['bt_sup']);
			f1("Shade of Akama: ", $_POST['bt_aka']);
			f1("Teron Gorefiend: ", $_POST['bt_ter']);
			f1("Gurtogg Bloodboil: ", $_POST['bt_gur']);
			f1("Reliquary of Souls: ", $_POST['bt_rel']);
			f1("Mother Shahraz: ", $_POST['bt_mot']);
			f1("Illidari Council: ", $_POST['bt_ilc']);
			f1("Illidan Stormrage: ", $_POST['bt_ils']);

	print "<br>[b]Poprzednie gildie i powody opuszczenia:[/b] ";
		print $_POST['oldguilds'];
	
	print "<br><br><br>[color=orange][b]O sobie:[/b][/color]<br>";
	
	print "<br>[b]Wiek:[/b] ";
		print $_POST['age'];
	
	print "<br>[b]P&#322;e&#263;:[/b] ";
		print $_POST['sex'];
	
	print "<br>[b]Co nam zaoferujesz jako gracz:[/b] ";
		print $_POST['player'];
		
	print "<br>[b]Co&#347; o sobie:[/b] ";
		print $_POST['aboutyou'];
		
	print "<br>[b]Kiedy grasz (dni i godziny raidowania):[/b] ";
		print $_POST['time'];
	print "<br>[b]Czy zapoznales sie z regulaminem i go akceptujesz?:[/b] ";
		print $_POST['rules'];
	print "<br>";	
		f1("[b]Czy posiadasz mikrofon?:[/b] ", $_POST['mic']);
		
print "<br><br><br>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~";
		
?>

</body>
</html>

			


