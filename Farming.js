function loadFarmGodScript() {
    $.getScript('https://higamy.github.io/TW/Scripts/Approved/FarmGodCopy.js')
        .done(function(script, textStatus) {
            console.log('Script loaded successfully:', textStatus);
        })
        .fail(function(jqxhr, settings, exception) {
            console.error('Error loading script:', exception);
        });
}

function clickOptionButton() {
    var button = document.querySelector('input.btn.optionButton[value="Plan farms"]');
    if (button) {
        button.click();
        console.log("Button 'Plan farms' clicked");
    } else {
        console.log("Button 'Plan farms' not found");
    }
}

function clickAllIcons() {
    var pCounter = 0;
    var elements = $('.farmGod_icon.farm_icon.farm_icon_a, .farmGod_icon.farm_icon.farm_icon_b');

    if (elements.length === 0) {
        console.log("Semua elemen telah diklik.");
        return;
    }

    elements.each(function(idx, el) {
        setTimeout(function() {
            $(el).click();
            console.log("Klik elemen:", el);
        }, pCounter * 250 + Math.floor(Math.random() * 100));
        pCounter++;
    });
}

function randomDelay(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function executeActions() {
    loadFarmGodScript(); // Jalankan script FarmGodCopy.js

    setTimeout(function() {
        clickOptionButton(); // Klik tombol setelah 4-6 detik

        setTimeout(function() {
            clickAllIcons(); // Klik semua ikon setelah 4-6 detik

            setTimeout(executeActions, randomDelay(600000, 900000)); // Ulangi dengan jeda 600-900 detik
        }, randomDelay(4000, 6000));

    }, randomDelay(4000, 6000));
}

executeActions();

void(0);
