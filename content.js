// Fills the content in "inputContent"
function fillContent(){
    document.getElementById("outputContent").innerHTML = "";
    // Determine which class type
    var classGroup = document.getElementById("classGroups").value;
    if (classGroup == "none") {
        document.getElementById("inputContent").innerHTML = "Select a class group";
        return;
    }
    var mainStat;
    var secondStat;
    var thirdStat;
    var useTertiary = false;
    var useMagic = false;
    if (classGroup.includes("str")) {
        mainStat = "STR";
        secondStat = "DEX";
    }
    else if (classGroup.includes("dex")) {
        mainStat = "DEX";
        secondStat = "STR";
    }
    else if (classGroup.includes("int")) {
        mainStat = "INT";
        secondStat = "LUK";
        useMagic = true;
    }
    else if (classGroup.includes("luk")) {
        mainStat = "LUK";
        secondStat = "DEX";
        thirdStat = "STR";
        if (classGroup === "luk1")
            useTertiary = true;
    }
    else {
        document.getElementById("inputContent").innerHTML = "Select a class group";
        return;
    }
    var inputBody = 
            "Your class main stat is " + mainStat + " and secondary stat is " + secondStat;
    if (useTertiary)
        inputBody += ", " + thirdStat;
    inputBody += ".<br>Your class uses " + (useMagic ? "magic" : "weapon") + " attack.";
    inputBody += "<br><br>\
\n\
Please prepare any multiple stat boosting potion, such as Candied Apple \
(available in Showa Town market), and a " + (useMagic ? "magic" : "weapon") + "\
 attack boosting potion, such as " + (useMagic ? "Magic" : "Warrior") + " \
Potion (available in NPC potion shops).<br>";
    inputBody += "<h3><b>Note: Please remove Xenon link skill if you currently use it!</b></h3>";
    // Clean damage section
    inputBody += "<img src=\"images/stats.png\" alt=\"Stats\"><br>";
    inputBody += "<img src=\"images/damage.png\" alt=\"Damage\"><br>";
    inputBody += "<label for=\"mainStatVal\">Enter your total " + mainStat + ":</label>";
    inputBody += "<br><input type=\"number\" id=\"mainStatVal\" name=\"Main Stat\">";
    inputBody += "<br>";
    inputBody += "<label for=\"secondStatVal\">Enter your total " + secondStat + ":</label>";
    inputBody += "<br><input type=\"number\" id=\"secondStatVal\" name=\"Secondary Stat\">";
    inputBody += "<br>";
    if (useTertiary) {
        inputBody += "<label for=\"thirdStatVal\">Enter your total " + thirdStat + ":</label>";
        inputBody += "<br><input type=\"number\" id=\"thirdStatVal\" name=\"Other Secondary Stat\">";
        inputBody += "<br>";
    }
    inputBody += "<label for=\"upperDmg\">Enter your upper damage range:</label>";
    inputBody += "<br><input type=\"number\" id=\"upperDmg\" name=\"Damage Range\">";
    inputBody += "<br><br>";
    
    // Stat boosted section
    inputBody += "<img src=\"images/apple.png\" alt=\"Stat potion\"><br>";
    inputBody += "Next, please use your stat boosting consumable";
    inputBody += "<br>";
    
    inputBody += "<label for=\"mainStatValBoosted\">Enter your total " + mainStat + ":</label>";
    inputBody += "<br><input type=\"number\" id=\"mainStatValBoosted\" name=\"Boosted Main Stat\">";
    inputBody += "<br>";
    inputBody += "<label for=\"mainStatBoostAmt\">The potion boosts " + mainStat + " (in the item description) by:</label>";
    inputBody += "<br><input type=\"number\" id=\"mainStatBoostAmt\" name=\"Main Stat Boost Amount\">";
    inputBody += "<br>";
    inputBody += "<label for=\"secondStatValBoosted\">Enter your total " + secondStat + ":</label>";
    inputBody += "<br><input type=\"number\" id=\"secondStatValBoosted\" name=\"Boosted Secondary Stat\">";
    inputBody += "<br>";
    inputBody += "<label for=\"secondStatBoostAmt\">The potion boosts " + secondStat + " (in the item description) by:</label>";
    inputBody += "<br><input type=\"number\" id=\"secondStatBoostAmt\" name=\"Secondary Stat Boost Amount\">";
    inputBody += "<br>";
    if (useTertiary) {
        inputBody += "<label for=\"thirdStatValBoosted\">Enter your total " + thirdStat + ":</label>";
        inputBody += "<br><input type=\"number\" id=\"thirdStatValBoosted\" name=\"Boosted other Secondary Stat\">";
        inputBody += "<br>";
        inputBody += "<label for=\"thirdStatBoostAmt\">The potion boosts " + thirdStat + " (in the item description) by:</label>";
        inputBody += "<br><input type=\"number\" id=\"thirdStatBoostAmt\" name=\"Other Secondary Stat Boost Amount\">";
        inputBody += "<br>";
    }
    inputBody += "<label for=\"upperDmgStatBoosted\">Enter your upper damage range:</label>";
    inputBody += "<br><input type=\"number\" id=\"upperDmgStatBoosted\" name=\"Boosted Stat Damage Range\">";
    inputBody += "<br>";
    inputBody += "<br><br>";
    
    // Potion boosted section
    inputBody += "Now, please <b>remove</b> the stat boosting consumable above<br>";
    inputBody += "<img src=\"images/potion.png\" alt=\"Attack potion\"><br>";
    inputBody += "Then, please use your attack boosting consumable";
    inputBody += "<br>";
    
    inputBody += "<label for=\"upperDmgBoosted\">Enter your upper damage range:</label>";
    inputBody += "<br><input type=\"number\" id=\"upperDmgBoosted\" name=\"Boosted Damage Range\">";
    inputBody += "<br>";
    inputBody += "<label for=\"attBoostAmt\">The potion boosts " + (useMagic ? "magic" : "weapon") + " attack (in the item description) by:</label>";
    inputBody += "<br><input type=\"number\" id=\"attBoostAmt\" name=\"Attack Boost Amount\">";
    inputBody += "<br><br>";
    
    // Xenon statted section
    inputBody += "<img src=\"images/xenon.png\" alt=\"Xenon link skill\"><br>";
    inputBody += "Finally, apply the Xenon link skill.";
    inputBody += "<br>";
    
    inputBody += "<label for=\"mainStatValLink\">Enter your total " + mainStat + ":</label>";
    inputBody += "<br><input type=\"number\" id=\"mainStatValLink\" name=\"Link skilled Main Stat\">";
    inputBody += "<br>";
    inputBody += "<label for=\"secondStatValLinked\">Enter your total " + secondStat + ":</label>";
    inputBody += "<br><input type=\"number\" id=\"secondStatValLink\" name=\"Link skilled Secondary Stat\">";
    inputBody += "<br>";
    if (useTertiary) {
        inputBody += "<label for=\"thirdStatValLinked\">Enter your total " + thirdStat + ":</label>";
        inputBody += "<br><input type=\"number\" id=\"thirdStatValLink\" name=\"Link skilled other Secondary Stat\">";
        inputBody += "<br>";
    }
    inputBody += "<label for=\"percentAmt\">What % stat does the Xenon link skill provide (5 or 10):</label>";
    inputBody += "<br><input type=\"number\" id=\"percentAmt\" name=\"Percentage Stat\">";
    inputBody += "<br><br>";
    
    inputBody += "When finished, pressed the button below to calculate your flame score equivalence!<br>";
    inputBody += "<button onclick=\"calculateStatEquivalence()\">Calculate!</button>";
    document.getElementById("inputContent").innerHTML = inputBody;
}

function calculateStatEquivalence() {
    var outputStr = "";
    
    // Stat strings
    var classGroup = document.getElementById("classGroups").value;
    var mainStat, secondStat, thirdStat;
    var useTertiary = false;
    var useMagic = false;
    if (classGroup.includes("str")) {
        mainStat = "STR";
        secondStat = "DEX";
    }
    else if (classGroup.includes("dex")) {
        mainStat = "DEX";
        secondStat = "STR";
    }
    else if (classGroup.includes("int")) {
        mainStat = "INT";
        secondStat = "LUK";
        useMagic = true;
    }
    else if (classGroup.includes("luk")) {
        mainStat = "LUK";
        secondStat = "DEX";
        thirdStat = "STR";
        if (classGroup === "luk1")
            useTertiary = true;
    }

    // Main stat calculations
    var mainStatAmt = document.getElementById("mainStatVal").value;
    var mainStatBoosted = document.getElementById("mainStatValBoosted").value;
    var mainStatIncr = document.getElementById("mainStatBoostAmt").value;
    var mainStatLink = document.getElementById("mainStatValLink").value;
    var pctAmt = document.getElementById("percentAmt").value;
    var mainStatPerStat = (mainStatBoosted - mainStatAmt) / mainStatIncr;
    var mainStatPerPct = (mainStatLink - mainStatAmt) / pctAmt;

    // Attack calculations
    var upperDmg = document.getElementById("upperDmg").value;
    var upperDmgBoosted = document.getElementById("upperDmgBoosted").value;
    var attIncr = document.getElementById("attBoostAmt").value;
    var upperDmgPerAtt = (upperDmgBoosted - upperDmg) / attIncr;

    // Secondary calculations
    var secondStatAmt = document.getElementById("secondStatVal").value;
    var secondStatBoosted = document.getElementById("secondStatValBoosted").value;
    var secondStatIncr = document.getElementById("secondStatBoostAmt").value;
    var secondStatLink = document.getElementById("secondStatValLink").value;
    var secondStatPerStat = (secondStatBoosted - secondStatAmt) / secondStatIncr;
    var secondStatPerPct = (secondStatLink - secondStatAmt) / pctAmt;
    
    // Tertiary calculations
    var thirdStatAmt, thirdStatBoosted, thirdStatIncr, thirdStatDecr, thirdStatPerStat;
    if (useTertiary) {
        var thirdStatAmt = document.getElementById("thirdStatVal").value;
        var thirdStatBoosted = document.getElementById("thirdStatValBoosted").value;
        var thirdStatIncr = document.getElementById("thirdStatBoostAmt").value;
        var thirdStatLink = document.getElementById("thirdStatValLink").value;
        var thirdStatPerStat = (thirdStatBoosted - thirdStatAmt) / thirdStatIncr;
        var thirdStatPerPct = (thirdStatLink - thirdStatAmt) / pctAmt;
    }
    
    // Other calculations -- parseFloat where necessary since js doesn't play nice with string/float
    var statBoostedDmg = document.getElementById("upperDmgStatBoosted").value;
    var fsPerSecondStat = (secondStatPerStat / mainStatPerStat / 4);
    var fsPerThirdStat;
    if (useTertiary)
        fsPerThirdStat = (thirdStatPerStat / mainStatPerStat / 4);
    var totalScoreStatBoosted = parseFloat(mainStatIncr) + parseFloat(secondStatIncr * fsPerSecondStat);
    if (useTertiary)
        totalScoreStatBoosted += parseFloat(thirdStatIncr * fsPerThirdStat);
    var dmgPerScore = parseFloat((statBoostedDmg - upperDmg) / totalScoreStatBoosted);
    var fsPerAtt = upperDmgPerAtt / dmgPerScore;
    // Calculate how much main stat 1% all stat is roughly worth
    var totalChangePerPct = parseFloat(mainStatPerPct) + parseFloat(secondStatPerPct / 4);
    if (useTertiary)
        totalChangePerPct = parseFloat(totalChangePerPct) + parseFloat(thirdStatPerPct / 4);
    var fsPerAllStat = totalChangePerPct / mainStatPerStat;
    
    // Descriptive section
    outputStr += "Based on your entered values:</b>";
    outputStr += "<br>1 point in " + mainStat + " increases your " + mainStat + " by " + mainStatPerStat.toFixed(4);
    outputStr += "<br>1 point in " + secondStat + " increases your " + secondStat + " by " + secondStatPerStat.toFixed(4);
    if (useTertiary)
        outputStr += "<br>1 point in " + thirdStat + " increases your " + thirdStat + " by " + thirdStatPerStat.toFixed(4);
    outputStr += "<br>1 " + (useMagic ? "magic" : "weapon") + " attack increases damage range by " + upperDmgPerAtt.toFixed(2);
    outputStr += "<br>Your stat boost potion gave the equivalent of about " + totalScoreStatBoosted.toFixed(4) + " main stat and increased your damage range by " + (statBoostedDmg - upperDmg);
    outputStr += "<br>1% all stats increases your " + mainStat + " by " + mainStatPerPct.toFixed(2);
    outputStr += " and " + secondStat + " by " + secondStatPerPct.toFixed(2);
    if (useTertiary)
        outputStr += " and " + thirdStat + " by " + thirdStatPerPct.toFixed(2);
    outputStr +=  ", which is about " + totalChangePerPct.toFixed(3) + " worth of " + mainStat + " for the damage formula";
    
    // Conclusion
    outputStr += "<br><br><b>Secondary Stat Equivalence (estimated):</b>";
    outputStr += "<br>" + fsPerSecondStat.toFixed(4) + " flame score per " + secondStat;
    if (useTertiary)
        outputStr += "<br>" + fsPerThirdStat.toFixed(4) + " flame score per " + thirdStat;
    outputStr += "<br>" + fsPerAtt.toFixed(4) + " flame score per " + (useMagic ? "magic" : "weapon") + " attack";
    outputStr += "<br>" + fsPerAllStat.toFixed(4) + " flame score per %All Stats";

    document.getElementById("outputContent").innerHTML = outputStr;
}