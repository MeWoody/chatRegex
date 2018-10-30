            if (fw == true) {
                let msg = jsonMsg.toString();
                if (msg.match(/_\.\[(.*)\]\._/)) {
                    fwv['name'] = msg.match(/_\.\[(.*)\]\._/)[1]
                }
                else if (fwv['name'] == "") {
                    fw = false
                    fwv['success'] = false
                }
                else if (msg.match(/Description: (.*)/)) {
                    fwv['desc'] = msg.match(/Description: (.*)/)[1]
                }
                else if (msg.match(/Age: (.*)/)) {
                    fwv['age'] = msg.match(/Age: (.*)/)[1]
                }
                else if (msg.match(/Warnings: (.*)/)) {
                    fwv['warnings'] = msg.match(/Warnings: (.*)/)[1]
                }
                else if (msg.match(/Land \/ Power \/ Maxpower: (.*)/)) {
                    fwv['lpm'] = msg.match(/Land \/ Power \/ Maxpower: (.*)/)[1]
                }
                else if (msg.match(/Total Worth: (.*)/)) {
                    fwv['worth'] = msg.match(/Total Worth: (.*)/)[1]
                }
                else if (msg.match(/Bank: (.*)/)) {
                    fwv['bank'] = msg.match(/Bank: (.*)/)[1]
                }
                else if (msg.match(/Followers Online \((\d*)\):/)) {
                    fwv['fonc'] = msg.match(/Followers Online \((\d*)\):/)[1]
                    fwmon = true
                }
                else if (msg.match(/Followers Offline \((\d*)\):/)) {
                    fwv['foffc'] = msg.match(/Followers Offline \((\d*)\):/)[1]
                    fwmon = false
                    fwmoff = true
                }
                else if (msg.match(/Alts Online \((\d*)\):/)) {
                    fwv['aonc'] = msg.match(/Alts Online \((\d*)\):/)[1]
                    fwmoff = false
                    fwaon = true
                }
                else if (msg.match(/Alts Offline \((\d*)\):/)) {
                    fwv['aoffc'] = msg.match(/Alts Offline \((\d*)\):/)[1]
                    fwaon = false
                    fwaoff = true
                }
                else if (fwmon == true) {
                    let fm = msg.split(" | ")
                    fwv['memon'] = fwv['memon'].concat(fm)
                }
                else if (fwmoff == true) {
                    let fm = msg.split(" | ")
                    fwv['memoff'] = fwv['memoff'].concat(fm)
                }
                else if (fwaon == true) {
                    let fa = msg.split(" | ")
                    fwv['alton'] = fwv['alton'].concat(fa)
                }
                else if (fwaoff == true) {
                    let fa = msg.split(" | ")
                    fwv['altoff'] = fwv['altoff'].concat(fa)
                    if (fwv['altoff'].length == parseInt(fwv['aoffc']) || fwv['altoff'][0] == "none") {
                        fw = false;
                        fwaoff = false;
                    }
                }
            }
