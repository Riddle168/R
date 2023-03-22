
/*
阅读sign
中国联通---搜索 阅读专区 --- 看小说
阅读抓包地址 https://10010.woread.com.cn/ng_woread_service/rest/basics/addreadtime
或者 https://10010.woread.com.cn/ng_woread_service/rest/history/addReadTime
直接过滤找 addreadtime 把，不区分大小写，需要最少阅读小说2分钟以上才有
变量需要请求体的sign值

龟兔赛跑sign
中国联通---搜索 阅读专区 --- 顶部轮播的活动最后一个
龟兔抓包地址 https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/queryActivityData
变量需要请求体的sign值

阅读抽奖奖token
中国联通---搜索 阅读专区 --- 阅读15分钟抽100 抽奖一次
抽奖抓包地址 https://10010.woread.com.cn/touchextenernal/actsub/doDraw.action
变量需要请求体acticeindex值


变量名:soy_ltgtsp_data
变量值:阅读的sign&龟兔的sign&抽奖的acticeindex

定时自己算,跑一次是2分钟阅读,2分钟内只能跑一次,频繁跑阅读会提示获取密钥失败
0/2 0-23 * * *
*/


const $ = new Env('联通-龟兔赛跑');
const author = '作者TG_ID:@ls_soy';
const notify = $.isNode() ? require('./sendNotify') : '';


var version_='jsjiami.com.v7';const _0x537bc1=_0x4e8e;function _0x873c(){const _0x45bdce=(function(){return[...[version_,'XTjsTjHipTaBpmiTt.pwcomC.vl7QMqHUbBOldeu==','W7XWlCoC','W45nW6u','W4b3W6tdSSkO','WQ8TW6v2Aa','WQr5WO4pomo/ra','WQ01WPVcNX3cReiCeW','eCkUW71nx8k7eYlcKvpcTSoMW6bgWPmZjmo/yMVcUCoah03cHmkaj8k2','jmkOEmkc','zSkhWQhdPCoC','W57LLlxPHQxLS4xLHO/JG5ZdKSkS','WQDPW4C','m8kOyCkgWQDcW6SMw3BdRa','W6tLL6pPH7BLSjFLHyhJGPCWW7xOViZLMiiA','WPPWq8kR','tqBdKaddMq','5O+D56EFW7XCAoI2PUwoOSo2','W61DoSoZWOe','ggHzWQuX','hSoEBq','W71gW6DRwa','v8oLeveZ','WPxdVL8mFmovW6u','W5tdVCklp08','xSokg8oWgW','WO5WuW','W61gw10E','WPRdOCo9E8oplGq','nmktWR8','W6eyECoKW4NcKda','hrC1','5O+B56wGsSk2W4VOTzZLJizj','W7qtwSo+W6S','W7ddLmowW6ev','5O+f56AtEaHY6lAs5y+2W4y','dCo+btOE','oCkfCG','W6lOTRtOTR7NI4dMGz3JG4xcMmkJ6lYr5zIZja','D8o/nCogca','WQpcJGa9lW','WOj8ySoIAxpdKCkUW4GFWRBcGHLbW5K+W5XrW790q8oEWO86W61HfmoM','wwyfWRldImocW5udWP/cIx86W68Tz37dJmkCW7dcUSkzhubTiv5BufJdVCkWWQa','W6n6FSkoW5K','qmkbW4f/Fa','g8oykq','D8oma3iv','5OYi56s0WO3cLmob6lAL5y2wW7a','AmolcSo8gq','jSksC8oMlW','d8kZhd5+','EKCXWPddRSo+','bSkJDG','WQ9Ejmk8yG','smkbWQ7dVCol','duT4WRaOWQGDWOhcLX5IcCoEsqGEW4O','5O6R56AknSkqgoI1GUwmNhS','W7FdS8omW7m2','WRZdTKxcHSoe','W7pdTZTtCmoivCkpg24TWPdcJ8kfW6RdLMRdPSopWQtcOqlcLCotEdtcQqK/W58rWQW','W41cW6ldV3O','WPbKwG','j8kEoH91','t3JcUv/dPG','WQVdM3hcKCkR','5O6656suiCojBoI3O+woJ8oB','W6NdRColW6iSBe7dMCkeW6pdPc5qWOGODxO5kMNdPcLUuCoMsmkSrcyHxSklWP7dUmotqvJdTq','eCk7uSoalq','jmkEyrzOWOeZWQSSWQ3cJt/dGq','pmoIF8oFvW','bJ8OW4Ca','DmoKoSoxia','F2TRW7fH','W51ECgy6','WQ3dGCoktmoQ','WP91W6ddOGW','W7HUqKi/','WRqDW4Pn','WQfwm8kruq','WRWNi8kqwG','pmofcmkgW6S','WP1IDmkiWPG','WRZLJ4xLIiZOT6ROT7ZJGPnieG','dSoytCkoia','g8oQwCkAf8ovCa','emo4W5/cVSk7eeKScSoRpr4I','WORcIZupla','W7fQja','W5njuSkUW6i','W5j1zmoLFa','x8oLW77dG8k/DSkKDmkAm8keFtNcSItdNLmnDW','W697Bmo/DwZcISkUW5iaWRBcKGa9WP4NW4zBWQe1zSkEWOGNW68Me8kOW7NdSapcOG','iCkCWQ7dVMq','W6LJxf0s','WOXIW47dNCkn','uEwvNoMhGowYVUweU+oaSblcQq','W7hdRmomW7O','5OYm56EIWRNdSctOT67LJPVcVq','WQvvW7tdHLRdPJG','WRHatCkBWPO','yY4tW6VcLuddNKzEWQ7dSgNdLSoBW6mylaqtqJSYW5hdRKZdIuddJSkIsCoWfKZdNYH3W4axWR/cS8kFoxRdPu3dISoQW5H3WQe7jmk9quJcVCo4k8k9WQBcT3hdSuW+WPRdLxqOW7mAiSoRWQNdQmoU','WQ8RW7zzDG','W6zbxSoYxG','eSoimaqBkmo+pSosW7a','5OYb56A3zCkrd+I0T+wpL2y','WP7dMLqpFW','g8o4fdK8','W44tx8oaW4m','W7jZW5mly8oYc8kHv2RcSYtdQIDYW6G','d8kXkZTG','WPeGW69zxW','W75xW6aB','uftcIK/dRLuN','W6elumo+W4m','d8oQrSkmmW','W5L+ACkhW7S','ceTAWRml','W5flWQTGqmonW5nyamoSWRZcIKpcHIVdRCo3W7nsWQhdGb3cNmkFv2hcTSkzlSoHWRyzWOBcUZy','sowxSUMgIEwYREweT+oaUmoRW7dOJRdLVjy','WORcJaaunq','W5ddSmkSpehcO8oN','W5xdSCkV','bfTH','y8kmW69psW','WRqxW44ptCorW6xdPSk4fmo+etVcIhjsW58FmZ5ukLddOW','t8k6WOy','WOi+lq','W5KkwSoVW4K','W7JOTzxOTBhNIi/MG63JGPlcM8oW6l635zQIza','amkVwSkAW6u','WOvFWOKHla','W5rac8kpW4KguNC','gSkfdZPa','W5hdQSk8kuRdLSkUW5fMW6TRvbmFbL51WOldNw7cMvhdHtxdJ8kQWQRcTCkGWO4DWOpdOCoiemo8A8oZtclcRKXNF0PgW71oW7bbrCo/W47cMcFcRSoiWPTFvhFdSCo1i8k2W6/cUHXjw1RcOCo2WOtdL8kddb4vW7FdG8kZWRS','w0ygWR7dLq','CEs7L+I3UUwnUUoaKanxrq','WOtdOmowtSotjqBdMXG8pq','WQRcSGK','W5JdKcvxzG','WOHzjG','sCk7WP/dVCo/h1roDCktA2juW4LqWQRdTCkmWOhcNCojEmkuW4xcV8ohW4C5hmoFBCk0WORdRmoTW67dKHS','k+odN+IhSEAEOEAnNoEKN+obQU+9U+AZPEAEQUIpRowoHEwjLoI3GEwpKoAwTEApQq','WQ13W4NdOIW','j8oana','W7SwA8oGW6y','aSk6WQK','WOhdKfO3sW','WOVdTfuGCCogW6DiWPLSWPyxW4fLWOK','W4PtW7zpz8kcW4HeuSoYW6/cLqFdJgJdPSk1W75ZWPFcGXJcJSoFftJdS8ksBmo6W60lWPW','WOFdLmoIWRtdIw40','ymoeW63cTdajpIddVsrVgW','jwJdVq','W7rMwSoVFa','jMldGZH7','p8kiWRe','sa/dTtBdKCogBxXTbW','Emogmua','WOSwf8ovWPLsBKRdMt4QW6m','W64xzSo/W64','oSoAimkWW6NcRanqe8orDmk8WRlcR28','5O2m56s9WOhcNadOTQtLJOus','aCkwxCkuW6u','WRXVW5tdMa','zJ8uW6JcHX3cLa','zoAkQ+s7G+wlGUs8KUI0JSoZEmkAl8kvBxJdVchdGf1c6k+U6isT6kka5A+h6kgOsa','rmonkCoqia','W4ZOT4BOT7FNIypMG7lJGORcMCkb6l+25zUueW','5OY656AlWRZdQSkf6lsV5y6MWPG','rvtcJNFdPLSN','W7WTrCoIW5O','WPRLJ63LIOBOTRFOTBNJGBqamG','W4ZPMy7ORRVJG7abWPy','W6TKtSkzW6O','qgfl','c8o6uSoEEq','jCkNBW','vZfFW73dM8k6t0xcRheKWOBdPSo4DN7cIryjW5ZdSI3dImkTCuKxmw0JWPFdKq','WPZdQ3pcVCkI','cSk+gqHh','W6NOTyFOTBVNIjdMGApJG5CaWONOVBRLMjRdKW','WO7dL8oAWRtdNq','W7pdTtTFCa','FmoKaCoQaG','WOBdNSo2','W5RdU8kHnq','fCofDG','zK1+','W5H5CmkQEmoVANdcQq','p1PQW5W','kmkEBSkGW48','Cmk1W7f6Fa','dmo5mJ4c','q8oOh30O','e8oIwSkDdW','5O+/56wqWQXiWPNOTOpLJ7uY','qWxdPG','sSkclmktbuRdM3xdMG','W4KkEmo7W40','BW1/WOxcJG','W6K+WPdcImoCWQ3dLSk/erKLpcldV2JcKCofaCoB','wJPzWO7cN8oW','W7bOW4S','WOhdVCoSrCoN','W7JPMiVORzVJGQJdLSkJ5B+Y5yQD5PAv6zsdFG'],...(function(){return[...['WRf1WO4kgSo8sCo8aIe','WOVdJNlcOmkf','WQH8W4NdG8kjW6FdHmkJaa','5O6L56AxAwrF6lwG5y28AG','WRJcVSomWPT4','W5LcW6DYxq','WRywW697Bq','WRFdN3y6t8oMW5P/WQD2WOHcW65fWO9xB8offmoXWQX/WOxcMwtdNComfSofWP3cH8o+','WOBcKSo7WRvZ','WPNdQ1WtDmorW6fiWOnZWQDCW4PIWOCidSkXjSosWPPpW6tcR0xdQmonpmk7W7NdTmkMWOe','mCkEEmoraa','WQ4NCCkkW7X7z8kREI/dJq','sgPoW5rbWOVcUW','pCo4zSkDnW','uuVcLu7dQa','nSkuWRNdO1q','WOC0W6HTuG','W7ZLJjRLIltOTOBOT5JJG5LwWR3OVBRLMBJdIW','bL7dRtHv','sSkai8knEZpcUshcJ1W','qqldKItdVq','W4ZdNbjI','C28fWO3dOW','W6PzrM44','qUAjR+wKVUobJcXD','ta/dQaK','hCoAFmolya','WQZdTSoAWOhdOq','5O+H56E8WQquaUI3RUwpNI0','wutcKW','iCkqySkpW6ldVSoXwCoLWOddRvRcRMnfgePvWQRdGMRdSSohW61xFde5W5n6gCo3W7hcTLhcLLhdOW','tmkQWPJdVSoTqH4','WPHviSkgFG','WP7cSIzlxW','BZStW7O','W4lcVmk7mf7cGSkJW4r1','W6tdT8oj','W4tdTcXfBW','5O6Y56EOrxa76lwB5yY7W4i','xvHAW4b2','WQz/WO4l','W7ZdMSkUew0','W7xdNf8hlSkoW6JdUSkb','5O2P56AKW6v0foI3IUwnTSoE','W6utBSoYW5dcUdm','zePU','DuC2WPS','o8ovW6u4jSoflmk3W4K','W6P3ACkeW54','zSoglhOZW4bMWPirWPxcTbBdPSkeWRO','bComnJOx','W6PSx8kpW6a','s0beW7jd','W45nW7a','WPNPMPVORlpJGyGdW4W','BKeYWOhdVq','ax/dUZ1g','W6ldTSoBW7C','e8ocnGWtjCoJ','fCk+jWrA','WP/dVLGYDmoCW7viWO9V','wWxdTqtdMmoxz3nTgSklDCkq','WQJLLkhPHk/LSPFLHQJJGQ7dGbxOJldLV4e','b8kVySoMoW','jCksWRFdQg8','WR/PMjRORRlJGQJdTIJOV7BLMiud','WQVdMYhdV0C','BmkyWQxdOCo2','W5fHzmkPW6K','W4ZMIkdLPBdJG6tdICk76l235zM/aG','WRu7lSkJsW','WRD4vmkAWPy','lCoulCko','W4HmW6SnFCkiW4DFtCo8W7xdNW7dLYNdVCo3WRDKWP3cLKldLmog','WR0PW697ta','WPtJGkzewXpOHQxMN63MLBdKUy/LHyNOTRhLORpMMQtJGyJVVlnN44gD5y+f5BQn55Qk6iAk5P6T5Pwr5lMM5y6w5ywK5lMc5Rsf5yY655Ia5lQS5lYe6iA65P6J77285lIh55AV5lU+5RsA6k+15zkl5AYm5lUs56kO56U677Y756sB5Q6l55Ep5lMo5zE35lMM5OMQ6z2p5RgE55IZ55IR77+s5zo15yUJ5zo05P6h6iEl6lEP77YW5l+m55Ei6iEH5P6C6koc5lMk5z6u5P+T5Bk85yYZ6AkL6zQP44koWRpJG5tKU5BOGO/KVQROR7RLHjdLKAhMSyNMGRtJGPpLHyhNOQFMGQlJGPZLR7VMLixMGktLK4/MN47MLPdMGyVVV57ORjFMO6pMJ6BMGRxLH7ROH5ROOQxLIzJML6NJG5q+44g25P6y6iwE5PYz5PsJ5lI1772m56sc5Q+D5lU/5l665yES5lYO5yYz44gs6k2X5z+O44gx572E5l615lMA5y6p5lMo5l+k5BYA5BYo55IT6l6e6l+A44oj5y695BMEW4BLK6/LIkpLK4RMNkZOHz3OTB7JGkvt44kI5PYC5lIR5A665lMm5l2y6iEZ5P2B6zA06Akf5QAP5lMQ6lwQ6lsM772d5yYf5OQG5l+35lUo6zIz5lIm55sj5lMN5l2L6iA65P2y6zwy6k6X5A6a6iEY55U/5lIB5l225O2j5AE05OQy5O6h5A6v44oAWQtJGP7NM6FMJ43MI6BPLOFMJAZKVl3NLyxOHyZMN7RLJQBMIzJKU63PM5/LI7VKURdNO5xOP6pOHRhMN7ZNM4tKUQdKVPhNLOFMIQpVVltLJzRMIj/KVAFKUQ3PMjBKUBhKU6dMJ7/MIRFLHidKUQRMNOxKUOpOOBFKUP7OV5NLJ6dLM7ZLR4JcJEwDKowmHoAWHow8K+AkNUEzKEwhQ+AZVoIKUUEANUAbS+wfGEs4NoI8Q+IHNUs8JEArLo+9LUAFLUs4OEwUGos5SoEvH+AVTEw/TEI3L+EzU+s4TEs/I+MyU+EKO+AYKoA9IUAkJEwfSUs5IUwsLUAESoAMSUs5Q+I2NEI1JEodSedJGktLPzlMNOhKUzZKV5xLJ7NKV5RMIOxKUi7KUz7ORRxKUzFOR6pOHjBMNRlLJjpOGkxMTzFLQiJKVAxNIyVLHOJMNOJLI77VVydLIlRLU5BLJyxMLRdPGB3NNlFLUBNMJyNKV5NOUQJKUR7ORydMM7JJGlhMIONMNO3MN7ZORi/MMRFVV77MIlpKUQVLSRZLNO/MLzBLI7xOR6hORilMLA/KUQlLK6NLIRBPMlBNM7ZLH6hOH5xMNOZJGyNcRUocJos6S+s8NUs7OEs6UUs8S+AuLow+T+AEP+EDMEASJUMGRUEAPUEyQUs6JUAjTUEBNoAmLUAlKUMuN+ApLUs/SoEuLoIULEs7Jow4L+EyQEs6SEs/MEIgIEACU+EBU+s9K+EuOUIdNUMbMEw7RUs7IoE6GEMySEIUQoATIUwIR+AzUooaLEADKUs6Ros+L+EuJ+MySoAxGEAzIUAwKoAkJEIGNEweQoASJUwfJEI0IowJUEABTEEyHoAFIUwkT+oaVos5VoAwK+s+IoEwO+w4HowMTowlMUs6Kos6L+s+V+EyPowhSUIgKoAFPUAwJos7VU+/REwlIUILNos6U+AdJow1G+AoMEwmOUAVVoweLUI1IUwHHoAALoobJa','WR7PMlpOR4ZJGkvqWP8','xmkjWR8Lmq','W4NcQrTrlCkCWRasW5S','qG/dSHBdLCoczW','bCoUr8kmw8oDz8keW4JcJq4','pCopcqyE','WPVdGcxdUvO','uCo1eSojesddKZCOnCoUW6WMW4FdSMxcNIlcVK/cKCkynLiwW44SjCkuW7u','WPTrWPK0mG','WOfwW5ddSZi','gSouESkla1ZdM27dKG/dUxfHWO1JWR1WtbCgkCoSbe/cJs0+kmoRh8ksW4a','lSkbySkRW7JcQCk7','vYrxWPhcOW','rX7dTrxdH8kFlt1+a8kjnSkbt8oaW4ldUh8zWRBcRmoqumkYdmkZWOddGsKiWOiNWQjQ','xuGkWQ/dLq','d8kDqCk8W7y','BmkvWQeDlmoJnmkIW4hcI8kRrLKIWOb4F8kHWRxdVWOgW79SW6RcMSoUW5NdQc4','WOhdVflcLSkB','5OYz56sMWOFcI0/OT6dLJ43cIq','WR/dHSobWR/dIq','FWWbW6lcLG','WOlLLldPHOtLSPNLHy3JGjhdKCkH','WP4BjCkwAG','swbA','mfzI','C8ofoKOT','AmklWRi','WPTpW7xdSCkb','xCoGeCowgstdLW','xmk3W6rUEa','W6ldSCooW5qT','lEwxGEMfG+wXVUweKEocKw/dTUI9VowyUSoL','Dmowo8okdq','5O6z56s9WRDepoI0NEwmKSkb','WO8KlCopsmoFBxJcM8kOqJmNW7lcM8knBWRdQCkdWPjXW6i+','EcOlW7lcKG','v8oZawK3','WQHBoSkmxG','WOtdHmo8','W6SyFSoAW4FcMsfu','W59cvSkyW5e','sH7dRJpdVG','WQv1WPqJo8o9sCo9','taxdSXy','xJiHW7NcOG','rKTIW4aDE2ldSbK','trddLHhdSa','WRvbeSkKsq','CSomiwG2W5P0WPihWPy','rea+WRldSq','WRBdQdZdQeT8rq','WPj+ua','W6ddTCot','s3Pq','WORcQGeSka','W41yxCovsW','ErfKWO7cV8owjtpdMc1wWOpdJmooDxJdSsqSW7/cJLVcVSozcY9gq10fW7/cLa','WOBdQ8ou','W7ZLJjRLIltOTOBOT5JJG5LwWR0','WO7dOmorE8ohlG8','WQhdVYhdHKD1rtu2','duT4WRaOWQGD','WOaKjW','AEwmPUwkTUI2PoI1GoodLCoKvG','guf1WRSTWReFWO/cIWbyiSozwXO','W7fNWPyPlmoqFG','WOjBiSkqFG','5OYZ56A/WO8LWOVOTA/LJP3cOG','WPtJGkBOHk3MNjJMJRRNPOxJG5dVV63MR53OHj7MNR7LJQNOGzFPNiVPVRdNJ4lLO47OT4u','W5f1E8oZng/cMCoOWObhW6G','WR90W4NdICoaWQpdHCk1braLlgK','W59HW4ddLNC','s8kqW6zVxq','fSovAmoovapcJG','dSk9dW','zviZWP7dRG','kaWRW4Kb','WOPFbSkizq','twFcL1JdOG','WONdNSo1WQi','WQmxW69oxCozW6FdRmkDaCo4htBcHW','WOVJGONOHQxMNR7MJO/NPAZJGBdVV6ZMSjtMN5ROJApLJ4NLIzdOTOdLJQJMLARMJAy','WRFcPGL9omoPEmk8WR/cTvq','WRf9W67dLSkiW6y','k+wvVUMhTEwYLowgSUobQ8olsq','gCk0WQFcHG','W4XgW7jWA8kcW4zEx8oU','W6tOTPZOTRxNIQ7MGjtJGPCWW7u','W7GSWPRcL1ldQe3dHSoCWQhcKJydW7KXmCoNxSkH','W7GKWPVcLvxdVKRdJColWQ3cIWG','WQX6fCkVza','xtjtWOtcQa','6k+g5yAo5y2l5yQz5Rsu5yMG','WQCzW5fswW','WO5ypCoWwmkparW/pY/dJmk2W4pcTr4kWQyxW5fRrrKs','ELJcSxBdRa','oSkuESkwW6u','WR/dUcu','zJGcW5JcKG','W7TUW4NdN3G','tMbFW6Xq','pmkNWQBdO1m','WRBdS1GnDW','vNBcIupdHa','W5rAsW','huhdRsXA','WRK8emkzwG','d+wvJUMeK+wXQUwhOoocTdGY6l+D5zQQW54','rMPuW4S','cSk0WRRcKW','WQPKW6tdI8kT','WRDbW5RdNSkj','pCkIFCkA','5OYs56sQW41dEEI2TEwpISk1','WRdcJGesm8k5','W4vwW6S','5O6z56ApDmocWQJOT77LJPme','hmovB8oWwGRcNZm','oZu/W7qx','e2tdGcbR','sbmPW4/cIq','bSkAWRpdG2i','W69+o8okWQK','W47dKG9YtCoX','lSk8yq','WP1+wSoKWQJcPmkgW6m6W4tdMG4BWPNdT8kMWQBdQSkEW5Xos8kRWRO','WP8KoCk+v8oczgpcNSk5AtiLW67dLa','xmoGdmocdcS'],...(function(){return['vSkuW519Fa','WOddO8o5WOldJW','W4JMIA7KU63LIz7KV4NOT4uDW7qCmCoKyCo7p+IVOoIeU+IIG+wSUEIJUCkL','lSkbySkYW77cQSkQhG','emoTfSorcddcIgXUA8kWW7n9WOtcS3ZdIJpcS0/cH8ofmeLgWRuBdq','WQ01WP7cHbZcS0zFsSkiwmoSW4e','WPRdLguPCW','eSkdebnL','WOJdSSoxqmo/','vLLFW4jK','5O6H56wcF8kCqUI0H+wpN8kP','wmkrWRDj','sWVdTqq','W6NOTyFOTBVNIjdMGApJG5CaWOK','5O+G56A/t8kivEI1PEwnHwm','f8oFFa','WP0sfmkJDG','kcaQW54x','vmkOW6O','C08VWOpdOW','5OYh56wcWO4me+I2NUwnVmkP','W65IW6NdLCkk','kSkwB8kpW6xcQ8oZhmkN','W6b1zCoZlZq','W7zPuCkCW7S','bmoUrmkngCoF','W4/dNbHjtSoOAmk4jxqZW4xcOmkLW6W','c8orACooua','pmkyWQ/dVMbzdW','bKfR','WOFcUsWVoG','oxldQqe','W7uqq8o1W6y','W7lMI6xKUkhLIy/KVOdOT6tcOf/cMgxcUqFdJZZcGHucWR3ORQxOHz3OOQ7LRRlOOi7dLq','zSozouWR','WRy8oCkdyq','j3ldTW','W6BJGzVKVjZOG6tMJ6VNPOZJGjlVVi3PQAhORiJOHkZMNBOxW5ldTowNIEI0Pe/ORB3LIjpKVjhMLABOHO3MNBVKU7tKUlZMH4VLHPdLR4pdPq','WOSFhSoCW6yYAgJdVI4','WQZcT8oNWQK','CqbPWPZcHq','zs8k','W713W5ZdNutdOrngs8kmtSk2W7P9WPFdI8oODCoKpNdcQ8kjwXLWlSoyWQ7cQL1IW5a','xCkPW64','DuJcINFdJG','5O2r56AJWPlcV3lOTBdLJPBdLG','WPVdRMq0Ea','W6L1W43dTmkvW5ZcM0hdRJNcMchcGHlcIa7cO8ogWPXNW6VcKWZcSWVcNxm2oxRcICkxWRm','m8ocqCkRfW','W41JyKiq','EComo0iRW5W','EZ8JW4lcSq','W47dMsvKyW','fmkqbXrU','WPDjW4hdJ8kD','w8kVW4f3AW','5O+X56E1W4BcOmkH6lsd5y6mqq','ymoPaCougq','W57LLlxPHQxLS4xLHO/JG5ZdKSkS6i+75BYY','W4DmW6e','x8oom8oJiq','W6SyFSoAW4hcMsbizmoU','imkZCCkkW7a','W7PXkSolWRv4vG','a11cWOSLWQa','WRKnW44','hSommmkTW7y','W5HeW7VdVmkO','EvSMWRpdGG','WRhcMW4ckCkN','yc8DW47cRG','WQZcMGi','ymkeWQuslq','WQFcGrK','WR3dOI8','WP/dVLGRDmoFW6u','W5ZdVHxcKmoeW7RcLCkvetGlmIXzjCo4','WPhcPbrwqG','WOJdVflcLa','fSommcOA','5O2C56whj8k6WOxOT5hLJQiC','oSkHiCkGW4qbW6mNb27cV2ZdMt0fevBcQqZcQSogaenMd2pdVZxdVmo0qI5sW5RcMq','n8oHzSklfq','imkaBSkBW58','bSo9q8kte8owCmkEW4W','wmoXfSovc3NcNwXWASkWW7j8WPRdQMtdLYtcT0RdJCkipeSfW7GwtmonWQldKxitlbNcTH7dN2Wnf8ktWOL8WODNkmoCn8kycmoaDCoExKmxt2/dTSkVWRVdSmka','W5/dNavZ','WQBcJHSx','yCkoWOu4jW','gK9+WPCK','W7jYW4e','W6H2j8ojWR5Hwmk+rXJdHmkC','i8kCWRldQw5t','WPGzW7fQzW','j2JcTWPWwmknW4q','WRaDW5DSv8owW77dVCkRbG','WOn9FSkBW58bCa','W49XzCoLEgFcJG','W6PKW47dSCkFW4ZdLvtdOZlcHgVcIqxcKWNdOSkd','WO5bW4tdUmk1','p8kYWQxdMgi','i8oNmCkQW6i','W4Knu8oWW7W','fJ1kWR/cNCoXrv/cUNyNWOlcS8kQpd7dKWipW5JcPdhcK8oWk1vnAq','lCkVxCk9W5i','o8oqomklW7hcSqLb','WQDtF8ktWQK','ygnxW7vv','cCkHWPhcGCoMp8k9','WP/dOIxdNxO','W6iYC8ocW4S','W5BMIQBKUPNLI63KVPtOTP5mW7ZdLSopWOtdP2ed6k626isT6kg45AYi6kccW40','hSkWWORcQ8oy','WO/dSKipB8oBW7PzWO55WROq','WPpdT8olCSodlq/dSr4','WRRdJCoxumol','jwPwWQetWPeIWRJcTrPgD8o2EXXkW7nqdCoNwmo0W6hcOSoFpSo/qmofWOKrW7y','DrD9','W49cW7jc','jmoqkSkCW6tcVWe','WQDZWOFdHqpcPvldJa','W4vcW6Tg','oSotuCoAza','c0XVWOaKWQmFWPpcKrPSkSovqrqlW492omovy8ogW5JcNmoRemkNnCkLW758WRtdHwtcG10','a8oNFmoAyW','xmkxWQSzna','WRFdMhWwDq','jgldQrPWxmka','AEAjMEwLGoodRSkRW6tOJANLV6e','DNtcRq','W693W4ddMfK','W61FvmoVCq','m8oDDmkSW4VdTb5mw8oqfSoOW73dOIjbg0pdGmoyW40gWO/dQwjyD8k7eSo5nmkJumodta','EK04','W5VdLHu','W7qEt8oIW7G','y8kEWOhdQ8oI','cSkfcH5t','W5JPMP7OR5FJGA4NWPi','gSkubsrz','zZua','W4PbW6vhA8khW45yuSo3W6RdLGddKwJdUmoOWQX0WOBcJHRdLSoxacpcQSonCSoPW7mrWOdcOJNdUq','WQTVW43dNmobW6ZdK8k5bbuQ','ECoZpfmY','W6pdUSkEd3G','hSo/jqWi','W5fJW6pdMMi','lEAjMowMH+obOh/cOa','rZ80W6RcGW','wfOAWPhdGG','WOVLLiFPHjtLSkZLHzRJG7dcKXa','rehcKNldSW','BGv7WOhcQG','FCkhACkKW4BcGq1dja','DhymWQxdKa','WOSXkCkrf8kwz3lcI8kLvYiH','W7PKW5ZdICkV','wCknWQ3dGmop','W4tdIYPerG','5O2y56s/WPdcTCor6lAz5yYnfq','c8k7WRG','jCoApG','jCkbEmkyW6xcRa','WQWvFSoJW5JcHg8tlSkSWRldTSkXh0StW5hdUZWWdIXifSoyrr5b','5O2p56sLzmkuW6hOTk7LJ5xdUW','kqOWW6m/','gmoFF8oy','W40kBCoJ','zCogjLe','W45XEmoXBwG','WRvRW5pdISknW6tdHa','WRJdMMtcMCkd','WQD+WPy','W7jzua','xSoWdW','omouxSoUza','W7Ltq3KdW5hcTmkdW5X3','iSo+w8k9ja','WQjxW7tdVmkh','qCkvWRCNkq','EZPeWQlcGCoUhL/cOgKNWPlcQSowEYFdIqHrWPNcGxhcLmoTkrjkjZ5XWP3dIG','FM0EWPldTa','o8oRF8kkW61dWRT1hG','WQNdNSoKWOBdHG','h8krC8kgW7u','jCoqn8kiW7hcSa','W4XHEW','WQddLCoGxCoo','oNxdGZTb','W4JdKLjl44gm5yALWOi','vw5pW5rf','kCk1is5K','WQHSW5RdIGVcPvVdNCohWQVcNx1hW6KXmSoYxSkNefJdHmksW55dW4hcUKZcKCoo','bCoynYe','emodjZSlnSo/','pbCOW5GdtuNcPMHGWPBcRvDpW5TVW7aNgY3cQc/cNqPXW5/dSYvnW5SklG','5O6M56A1b8oew+I2LowpOSon','pCksWOtdOhy','W7H6pCo0WQnMvSkZ','WO3cGvy4eSkYp8oIzW','qr/dRa','WRhcVCoNWQ5OWQ8j'];}())];}())];}());_0x873c=function(){return _0x45bdce;};return _0x873c();};(function(_0x3d667e,_0x255033,_0xdfe981,_0x2a08c9,_0xfde4a4,_0x1a8dcb,_0x1e2134){return _0x3d667e=_0x3d667e>>0x4,_0x1a8dcb='hs',_0x1e2134='hs',function(_0x2b31d7,_0x493f21,_0x121bdb,_0x4142e4,_0x19c517){const _0x55de1a=_0x4e8e;_0x4142e4='tfi',_0x1a8dcb=_0x4142e4+_0x1a8dcb,_0x19c517='up',_0x1e2134+=_0x19c517,_0x1a8dcb=_0x121bdb(_0x1a8dcb),_0x1e2134=_0x121bdb(_0x1e2134),_0x121bdb=0x0;const _0x2cf95d=_0x2b31d7();while(!![]&&--_0x2a08c9+_0x493f21){try{_0x4142e4=parseInt(_0x55de1a(0x260,'e#Qs'))/0x1+parseInt(_0x55de1a(0xd4,'NYe!'))/0x2*(parseInt(_0x55de1a(0xbc,'RBpK'))/0x3)+-parseInt(_0x55de1a(0x2be,'m*GE'))/0x4*(-parseInt(_0x55de1a(0x308,'W#pm'))/0x5)+-parseInt(_0x55de1a(0x2a2,'[z[c'))/0x6*(parseInt(_0x55de1a(0x194,'[6HX'))/0x7)+parseInt(_0x55de1a(0x207,'NLPU'))/0x8*(-parseInt(_0x55de1a(0x225,'NU7('))/0x9)+-parseInt(_0x55de1a(0x29a,'aY24'))/0xa+parseInt(_0x55de1a(0x100,'NU7('))/0xb;}catch(_0x343763){_0x4142e4=_0x121bdb;}finally{_0x19c517=_0x2cf95d[_0x1a8dcb]();if(_0x3d667e<=_0x2a08c9)_0x121bdb?_0xfde4a4?_0x4142e4=_0x19c517:_0xfde4a4=_0x19c517:_0x121bdb=_0x19c517;else{if(_0x121bdb==_0xfde4a4['replace'](/[wpbHCTXdOtQBqUMule=]/g,'')){if(_0x4142e4===_0x493f21){_0x2cf95d['un'+_0x1a8dcb](_0x19c517);break;}_0x2cf95d[_0x1e2134](_0x19c517);}}}}}(_0xdfe981,_0x255033,function(_0x420b1c,_0x752539,_0x1ba753,_0x434e91,_0x214067,_0x1461e5,_0x32d740){return _0x752539='\x73\x70\x6c\x69\x74',_0x420b1c=arguments[0x0],_0x420b1c=_0x420b1c[_0x752539](''),_0x1ba753=`\x72\x65\x76\x65\x72\x73\x65`,_0x420b1c=_0x420b1c[_0x1ba753]('\x76'),_0x434e91=`\x6a\x6f\x69\x6e`,(0x12444e,_0x420b1c[_0x434e91](''));});}(0xca0,0x2d41e,_0x873c,0xcc),_0x873c)&&(version_=_0x873c);try{CryptoJs=$['isNode']()?require(_0x537bc1(0x111,'#njV')):'';}catch(_0x23e362){throw new Error(_0x537bc1(0x267,'LVQk'));}try{axios=$[_0x537bc1(0xce,'Nrlc')]()?require('axios'):'';}catch(_0x238143){throw new Error(_0x537bc1(0xfd,'RBpK'));}let subTitle='',user_num=0x0,execAcList=[],user_data='',app_sj=![];!(async()=>{const _0x57f019=_0x537bc1,_0x1a4877={'YXANc':function(_0x33947a,_0x1e373a){return _0x33947a-_0x1e373a;},'gRTDS':function(_0x2d05c5,_0x27a219){return _0x2d05c5*_0x27a219;},'ZhsDk':function(_0x406c8f,_0x4a7d85){return _0x406c8f==_0x4a7d85;},'anLZS':function(_0x4f55eb,_0x2b04e3){return _0x4f55eb!==_0x2b04e3;},'srYRP':_0x57f019(0x212,'s4iR'),'NxEfX':function(_0x92a6fc){return _0x92a6fc();},'mcCfv':function(_0x22fc09,_0xadf2a3){return _0x22fc09>_0xadf2a3;},'aqiZN':_0x57f019(0x311,'MH[2'),'PnTCp':_0x57f019(0x1c8,'E]5J'),'kuzUH':function(_0x40844b,_0x387dae){return _0x40844b>_0x387dae;},'FLOPg':function(_0x128fa9,_0x5462b8){return _0x128fa9!==_0x5462b8;},'dfKsu':'CUzDO','ubrXU':_0x57f019(0x312,'DE*o'),'aaoKs':function(_0x456b39,_0x214958){return _0x456b39===_0x214958;},'NDhDL':_0x57f019(0x193,'%doh'),'xIGDa':function(_0x4e6112,_0x367467){return _0x4e6112+_0x367467;},'VOdAY':function(_0x33b983,_0x496679){return _0x33b983*_0x496679;},'iWgua':function(_0x1cad52,_0x5ed375){return _0x1cad52*_0x5ed375;},'xnPiC':function(_0x336d3a,_0x585462){return _0x336d3a*_0x585462;},'OCPih':function(_0x27cab1,_0x235923){return _0x27cab1*_0x235923;},'kDtyV':function(_0x42bcee,_0x43999f){return _0x42bcee!==_0x43999f;},'upQin':_0x57f019(0x1aa,'[z[c'),'tRjjd':_0x57f019(0x20e,'NYe!')};console[_0x57f019(0xb9,'s4iR')](_0x57f019(0x2da,'D&)o'));if($['isNode']()){if(_0x1a4877[_0x57f019(0x295,'E]5J')](_0x1a4877[_0x57f019(0x1b7,'4dNZ')],_0x57f019(0x134,'MkJx')))_0x5c8851=_0x1b2c73[_0x57f019(0x2ec,'g(Ye')](/作者TG_ID:(\S*)/)[0x1][_0x57f019(0x26b,'Qbj@')](/_/g,'><');else{await _0x1a4877[_0x57f019(0x190,'IjQi')](yyz_getip);try{Tips=author['match'](/(\S*)TG_ID:@ls_soy/)[0x1];}catch(_0x120043){throw new Error('\x0a【作者提示】：验证脚本SHA失败,请勿修改脚本中任意内容\x0a');}try{YZ=author[_0x57f019(0x1f5,'AW%A')](/作者TG_ID:(\S*)/)[0x1]['replace'](/_/g,'><');}catch(_0x48d5c0){throw new Error(_0x57f019(0x120,'s4iR'));}if(process[_0x57f019(0x2b3,'Kf3Z')][_0x57f019(0xbb,'06Qr')]&&_0x1a4877[_0x57f019(0x230,'AW%A')](process[_0x57f019(0x24e,'Ll]7')][_0x57f019(0x262,'[6HX')][_0x57f019(0x2bb,'P1pE')]('@'),-0x1))_0x1a4877[_0x57f019(0x2e7,'%doh')]!==_0x1a4877['PnTCp']?user_data=process[_0x57f019(0x24e,'Ll]7')]['soy_ltgtsp_data']['split']('@'):(_0x22d285[_0x57f019(0x19c,'[6HX')]('\x0a【'+_0x56eae0+_0x57f019(0x1f2,'Nrlc')+_0x4f7abf['num']+_0x57f019(0xd2,'7]Rl')+_0xc1db61[_0x57f019(0xc4,'[z[c')]),_0x432fdc+='\x0a【'+_0x58fc54+'提示---账号\x20'+_0x2ebed3[_0x57f019(0x13c,'E]5J')]+_0x57f019(0x108,'NYe!')+_0x38ce89[_0x57f019(0xb6,'hAuM')]);else{if(process[_0x57f019(0x144,'MH[2')]['soy_ltgtsp_data']&&_0x1a4877[_0x57f019(0x141,'4Kui')](process['env'][_0x57f019(0xf9,'s4iR')]['indexOf']('\x0a'),-0x1))user_data=process[_0x57f019(0x2c4,'zQdv')][_0x57f019(0x2c0,'NLPU')]['split']('\x0a');else{if(process[_0x57f019(0x270,'ip5r')]['soy_ltgtsp_data']&&_0x1a4877[_0x57f019(0x1db,'h2Lq')](process['env'][_0x57f019(0x256,'SRE)')][_0x57f019(0x23b,'h2Lq')]('#'),-0x1)){if(_0x1a4877['FLOPg'](_0x1a4877[_0x57f019(0x277,'2%9f')],_0x1a4877[_0x57f019(0x2af,'Ll]7')]))user_data=process[_0x57f019(0xb4,'hAuM')][_0x57f019(0x115,'0^VC')]['split']('#');else{let _0x24b246=_0xc41f06[_0x57f019(0xe7,'ip5r')](_0x1a4877[_0x57f019(0x289,'%doh')](_0x1a4877['gRTDS'](_0x232394[_0x57f019(0x157,'^T@m')](),_0x5ec433['length']),0x1));_0x145fd0+=_0x512020[_0x24b246];}}else _0x1a4877[_0x57f019(0x1eb,'MH[2')](_0x1a4877[_0x57f019(0x20d,'hAuM')],_0x1a4877[_0x57f019(0x1f4,'D)fH')])?user_data=process[_0x57f019(0x1d7,'[z[c')]['soy_ltgtsp_data'][_0x57f019(0xc6,'IjQi')]():(_0x6bc21[_0x57f019(0x254,'LVQk')]('\x0a【'+_0x5b3e8b+_0x57f019(0x2ba,'h2Lq')+_0x4537c3[_0x57f019(0x1a9,'MkJx')]+_0x57f019(0x18e,'m*GE')+_0x23f61e[_0x57f019(0x15c,'DE*o')]),_0x314742+='\x0a【'+_0x27daf3+'提示---账号\x20'+_0x4f26f7[_0x57f019(0x1a9,'MkJx')]+'\x20抽奖】:\x20'+_0x46b936[_0x57f019(0x217,'mr40')]);}};user_num=user_data[_0x57f019(0x1f6,'IjQi')],console[_0x57f019(0x10a,'[z[c')]('\x0a===\x20脚本执行\x20-\x20北京时间：'+new Date(_0x1a4877[_0x57f019(0x202,'Qbj@')](new Date()[_0x57f019(0x30d,'ol35')](),_0x1a4877[_0x57f019(0xfb,'SWPx')](_0x1a4877[_0x57f019(0x15e,'Nrlc')](new Date()[_0x57f019(0x1fa,'06Qr')](),0x3c),0x3e8))+_0x1a4877[_0x57f019(0x139,'#njV')](_0x1a4877[_0x57f019(0x1e4,'P1pE')](_0x1a4877[_0x57f019(0x179,'SRE)')](0x8,0x3c),0x3c),0x3e8))[_0x57f019(0xcb,'E]5J')]()+_0x57f019(0x1a2,'Ll]7')),console['log'](_0x57f019(0x1b8,'MH[2')+user_num+_0x57f019(0x24a,'^T@m')),subTitle='',await get_zu();}}else{if(_0x1a4877['kDtyV'](_0x1a4877[_0x57f019(0x213,'[6HX')],_0x1a4877['tRjjd'])){console[_0x57f019(0x27a,'2%9f')]('\x0a【脚本提示】：此脚本只能青龙环境跑');return;}else{let _0x5498c6=_0x2ac3bb[_0x57f019(0x1b9,'ip5r')](_0x707f8c);_0x1a4877['ZhsDk'](_0x5498c6['code'],0x0)?_0x3fb978[_0x57f019(0x30e,'r!W7')]('\x0a【'+_0x5504a3+_0x57f019(0x1e6,'NLPU')+_0x1c8605[_0x57f019(0x252,'[6HX')]+'\x20参加赛跑】:\x20'+_0x5498c6['data']):(_0x5e0e24[_0x57f019(0x187,'4Kui')]('\x0a【'+_0x1a70c3+_0x57f019(0x1fb,'[z[c')+_0xab527b['num']+_0x57f019(0xba,'#njV')+_0x5498c6[_0x57f019(0x15c,'DE*o')]),_0x484de5+='\x0a【'+_0x219389+_0x57f019(0x109,'MkJx')+_0x263e12[_0x57f019(0xdc,'ol35')]+_0x57f019(0xb5,'3iDR')+_0x5498c6['message']);}}})()[_0x537bc1(0x14a,'n)mc')](_0x2951c8=>$[_0x537bc1(0x28b,'%doh')](_0x2951c8))[_0x537bc1(0x1c9,'RBpK')](()=>$[_0x537bc1(0x2b7,'RBpK')]());async function get_zu(){const _0x3da368=_0x537bc1,_0x3a5851={'WyiBs':function(_0x16fe3b,_0x5c103e){return _0x16fe3b(_0x5c103e);},'kgmOE':_0x3da368(0x15d,'N[Jf'),'AsxCS':function(_0x408c52,_0x1e2a61){return _0x408c52!==_0x1e2a61;},'MWNlz':'xItLR','KgIsr':function(_0x4d9084,_0x2810cf){return _0x4d9084<_0x2810cf;},'PXOhv':function(_0x510eee,_0x3673c6){return _0x510eee+_0x3673c6;}};let _0xa75638=0x0,_0x27e172=[];for(let _0x239fba=0x0;_0x3a5851[_0x3da368(0x1ba,'AW%A')](_0x239fba,user_num);_0x239fba++){_0x3da368(0x166,'ip5r')!==_0x3da368(0x300,'Ll]7')?_0x3a5851[_0x3da368(0x13d,'[6HX')](_0x49693d,_0x5594c4):_0x27e172['push']({'num':_0x3a5851[_0x3da368(0x2bf,'e#Qs')](_0x239fba,0x1),'token':user_data[_0x239fba]['split']('&')[0x2],'yd_sign':user_data[_0x239fba][_0x3da368(0x2fe,'4Kui')]('&')[0x0],'gt_sign':user_data[_0x239fba]['split']('&')[0x1]});}_0x27e172[_0x3da368(0x2c9,'n)mc')]((_0x26447e,_0xdb22b2)=>{const _0x50a895=_0x3da368,_0x42160d={'BqBWX':_0x3a5851[_0x50a895(0xd6,'%doh')]};execAcList[_0xa75638]?execAcList[_0xa75638][_0x50a895(0x223,'Kf3Z')](_0x26447e):_0x3a5851[_0x50a895(0x281,'SWPx')]('dsAHR',_0x3a5851[_0x50a895(0x2d2,'6Ora')])?execAcList[_0xa75638]=[_0x26447e]:_0x466a63=_0x42160d['BqBWX'];}),await implement();}async function implement(){const _0x3a667d=_0x537bc1,_0x241346={'CAUHm':_0x3a667d(0x11c,'SRE)'),'MdYIO':function(_0x252721,_0x1f3888){return _0x252721==_0x1f3888;},'rBsJM':function(_0x41e5d8,_0x38367d){return _0x41e5d8!==_0x38367d;},'Vueyd':'AKcrC','qwhMQ':'eXICy','HbMOl':function(_0x1294b4,_0x1d1ead){return _0x1294b4===_0x1d1ead;},'YHcsc':'AZdAt','KjUXO':_0x3a667d(0x307,'4Kui')};let _0x5326af=[];if(execAcList[_0x3a667d(0x19d,'#njV')]>0x0){for(let _0x4398ed of execAcList){await Promise[_0x3a667d(0x30f,'Kf3Z')](_0x4398ed['map'](_0x459fe9=>start(_0x459fe9)));}if(notify){if(_0x241346[_0x3a667d(0x1d5,'aY24')](_0x241346[_0x3a667d(0x1b3,'#njV')],_0x241346['qwhMQ']))subTitle&&await notify[_0x3a667d(0x28f,'RBpK')]($[_0x3a667d(0x174,'zQdv')],subTitle);else throw new _0x4640ce(_0x241346[_0x3a667d(0x2f6,'Nrlc')]);}}else{if(_0x241346[_0x3a667d(0x2e0,'n)mc')](_0x241346[_0x3a667d(0x299,'D)fH')],_0x241346[_0x3a667d(0x2e9,'IjQi')])){let _0x295342=_0x2a7dfd[_0x3a667d(0x154,'06Qr')](_0x48f625);_0x241346[_0x3a667d(0x249,'IjQi')](_0x295342[_0x3a667d(0x2c8,'Kf3Z')],0x0)?(_0x2a12eb[_0x3a667d(0x254,'LVQk')]('\x0a【'+_0x5344f0+_0x3a667d(0x22b,'ol35')+_0x4623c3[_0x3a667d(0x21a,'aY24')]+_0x3a667d(0x135,'r!W7')+_0x295342[_0x3a667d(0x171,'zQdv')][_0x3a667d(0x291,'Nrlc')]+','+_0x295342[_0x3a667d(0x152,'MH[2')][_0x3a667d(0x156,'aY24')]),_0x1a1334+='\x0a【'+_0x4c1725+_0x3a667d(0x224,'3iDR')+_0x265b0a['num']+_0x3a667d(0x239,'D)fH')+_0x295342[_0x3a667d(0x1d2,'r!W7')][_0x3a667d(0x14f,'mr40')]+','+_0x295342[_0x3a667d(0x2d7,'[6HX')][_0x3a667d(0x16c,'SRE)')]):(_0xfe1f05['log']('\x0a【'+_0x3aa923+'提示---账号\x20'+_0x5794c9[_0x3a667d(0x301,'2%9f')]+_0x3a667d(0x191,'zQdv')+_0x295342[_0x3a667d(0x172,'[6HX')]),_0x1e57f8+='\x0a【'+_0x5463e5+_0x3a667d(0x263,'NU7(')+_0x3db482[_0x3a667d(0x1f0,'n)mc')]+_0x3a667d(0x222,'W#pm')+_0x295342['message']);}else console[_0x3a667d(0x286,'@23I')](_0x3a667d(0xcc,'Kf3Z'));}}async function start(_0x36c025){const _0x330728=_0x537bc1,_0x2106cc={'etoVJ':function(_0x7d1b52,_0x2242e8){return _0x7d1b52(_0x2242e8);}};await addreadtime(_0x36c025),await _0x2106cc[_0x330728(0x304,'@23I')](Activity,_0x36c025);};function Activity(_0x42f8d3){const _0x1e2979=_0x537bc1,_0xbb0aee={'TFwEK':_0x1e2979(0x1c2,'0^VC'),'wlOYL':_0x1e2979(0x16a,'3iDR'),'mbeCt':_0x1e2979(0x188,'zQdv'),'MiOmk':function(_0x1820f2,_0x3d9496){return _0x1820f2!==_0x3d9496;},'Romui':'iueGl','ufHOT':'zvYQs','FyWCg':_0x1e2979(0x153,'m*GE'),'DUHdG':function(_0x20d7be,_0x45d69d){return _0x20d7be(_0x45d69d);},'aGwXC':function(_0x4cbbb3,_0x166138){return _0x4cbbb3>_0x166138;},'wUkix':'DMVNn','Hcobi':'QqUul','PLKLl':_0x1e2979(0x275,'AW%A'),'vVKHq':_0x1e2979(0xd3,'NYe!'),'XvBzb':'no-cache','AnLbc':_0x1e2979(0x257,'zQdv'),'dfXFq':_0x1e2979(0x1ed,'IjQi'),'olrNU':_0x1e2979(0x2eb,'m*GE'),'QKhuB':_0x1e2979(0xff,'MkJx'),'XrbRP':_0x1e2979(0x2d8,'zQdv'),'XNhYa':_0x1e2979(0x2df,'mr40'),'oKQFY':_0x1e2979(0x303,'e#Qs'),'CJzvK':_0x1e2979(0xc1,'Nrlc'),'ZwybZ':_0x1e2979(0x17f,'[6HX'),'GzWcp':function(_0x14fde6,_0x5c61f1){return _0x14fde6(_0x5c61f1);}};let _0x339255=new Date()[_0x1e2979(0xb8,'06Qr')](),_0x158173=_0xbb0aee[_0x1e2979(0x1ea,'MkJx')](getRandom,0xd),_0x395a2a=_0x1e2979(0x2b2,'h2Lq')+_0x42f8d3['gt_sign']+'\x22}';return new Promise(_0x2407c2=>{const _0x22699d=_0x1e2979,_0xa64d8c={'xFmyO':_0x22699d(0x2e5,'[z[c'),'YpnBp':_0xbb0aee[_0x22699d(0xe4,'4dNZ')],'tEPzq':_0xbb0aee[_0x22699d(0x2ca,'AW%A')],'sUHgm':_0xbb0aee[_0x22699d(0xdd,'4Kui')],'UqbFT':'CPBUh','ZdVVA':function(_0x13ad2a,_0x5ce931){const _0x2677b9=_0x22699d;return _0xbb0aee[_0x2677b9(0xda,'Qbj@')](_0x13ad2a,_0x5ce931);},'vtqEy':_0xbb0aee['Romui'],'ZJohz':function(_0x240c3f,_0xeb04f9){return _0x240c3f==_0xeb04f9;},'VeaHV':_0xbb0aee['ufHOT'],'kNBEA':_0xbb0aee[_0x22699d(0x2ea,'#njV')],'xcmvg':function(_0x99549a,_0x316155){const _0x25a8ce=_0x22699d;return _0xbb0aee[_0x25a8ce(0x229,'DE*o')](_0x99549a,_0x316155);},'mZznR':'UCGaL','xSAsl':function(_0x59b4ab,_0x4e6ce3){const _0x40aa15=_0x22699d;return _0xbb0aee[_0x40aa15(0xe2,'Qbj@')](_0x59b4ab,_0x4e6ce3);},'YBHYr':_0xbb0aee[_0x22699d(0x220,'D&)o')],'RJfvd':_0x22699d(0x2f1,'s4iR'),'csCBC':function(_0x1b7608,_0x5dcdf2){return _0x1b7608(_0x5dcdf2);},'beVWJ':_0xbb0aee[_0x22699d(0x23a,'MH[2')],'WouMF':function(_0x38c5d9,_0x38d037){return _0x38c5d9===_0x38d037;},'lZivm':_0xbb0aee[_0x22699d(0x29f,'E]5J')]};let _0x6f6af3={'url':_0x22699d(0x248,'h2Lq'),'headers':{'Host':_0xbb0aee['vVKHq'],'content-length':_0x395a2a[_0x22699d(0x12d,'NLPU')],'pragma':_0xbb0aee[_0x22699d(0x30a,'Ll]7')],'cache-control':_0xbb0aee['XvBzb'],'accept':_0xbb0aee[_0x22699d(0x14d,'mr40')],'accesstoken':_0xbb0aee[_0x22699d(0x293,'3iDR')],'user-agent':_0x22699d(0x1be,'W#pm'),'Content-Type':_0xbb0aee[_0x22699d(0xbd,'Ll]7')],'origin':_0xbb0aee[_0x22699d(0x26f,'e#Qs')],'x-requested-with':_0xbb0aee[_0x22699d(0x1a0,'W#pm')],'sec-fetch-site':_0xbb0aee[_0x22699d(0x1f3,'MkJx')],'sec-fetch-mode':'cors','sec-fetch-dest':_0xbb0aee[_0x22699d(0x137,'MkJx')],'referer':'https://10010.woread.com.cn/ng_woread/','accept-encoding':_0xbb0aee['CJzvK'],'accept-language':_0xbb0aee[_0x22699d(0x11e,'s4iR')]},'body':_0x395a2a};$['post'](_0x6f6af3,async(_0x4bc3fc,_0x29b7b5,_0x11fce8)=>{const _0x52bbdb=_0x22699d,_0x373ded={'AcJgQ':_0xa64d8c['tEPzq'],'wfTxl':_0xa64d8c['sUHgm'],'AMEqO':function(_0x267aa2,_0x474f0d){return _0x267aa2-_0x474f0d;}};try{if(_0x52bbdb(0x1b6,'hAuM')===_0xa64d8c['UqbFT']){if(_0x4bc3fc){if(_0x52bbdb(0x20f,'D&)o')==='VAill')throw new _0x37b63a(_0x373ded[_0x52bbdb(0x175,'[z[c')]);else console['log']('\x0a【'+Tips+_0x52bbdb(0x2ba,'h2Lq')+_0x42f8d3[_0x52bbdb(0xf7,'jB*x')]+_0x52bbdb(0x243,'Nrlc')+_0x4bc3fc),subTitle+='\x0a【'+Tips+_0x52bbdb(0x2ab,'SWPx')+_0x42f8d3['num']+_0x52bbdb(0x276,'NYe!')+_0x4bc3fc;}else{if(_0x52bbdb(0x131,'Nrlc')!==_0x52bbdb(0x253,'P1pE')){let _0x4e9c10=JSON[_0x52bbdb(0x116,'[z[c')](_0x11fce8);if(_0x4e9c10[_0x52bbdb(0xca,'2%9f')]==0x0){if(_0xa64d8c[_0x52bbdb(0x20b,'ip5r')](_0xa64d8c['vtqEy'],_0x52bbdb(0x132,'SWPx')))console[_0x52bbdb(0x1e2,'W#pm')]('\x0a【'+Tips+_0x52bbdb(0xec,'RBpK')+_0x42f8d3['num']+'\x20赛跑状态】:\x20当前总阅读时长:'+_0x4e9c10[_0x52bbdb(0x265,'Nrlc')][_0x52bbdb(0x2cc,'@23I')]+'分钟'),_0xa64d8c[_0x52bbdb(0x297,'3iDR')](_0x4e9c10[_0x52bbdb(0xe8,'LVQk')][_0x52bbdb(0x140,'MH[2')],0x1)&&(_0xa64d8c[_0x52bbdb(0x1d8,'zQdv')]!==_0xa64d8c[_0x52bbdb(0x2d3,'e#Qs')]?await _0xa64d8c[_0x52bbdb(0x2c6,'IjQi')](wakeRabbit,_0x42f8d3):_0x5555d6=_0x2ac4c8);else{let _0x4bef63=_0x25f8c4[_0x52bbdb(0x17c,'Qbj@')][_0x52bbdb(0x1bd,'n)mc')](_0x570162[_0x52bbdb(0x272,'jB*x')][_0x52bbdb(0xeb,'D)fH')][_0x52bbdb(0x21c,'DE*o')](_0x513c36),_0x4e83d4[_0x52bbdb(0x272,'jB*x')]['Utf8'][_0x52bbdb(0x2c1,'n)mc')](_0xa64d8c[_0x52bbdb(0x186,'AW%A')]),{'iv':_0x3549df['enc'][_0x52bbdb(0x232,'zQdv')]['parse'](_0x52bbdb(0x22f,'RBpK')),'mode':_0x26163c['mode'][_0x52bbdb(0x27d,'ip5r')],'padding':_0x54bc83[_0x52bbdb(0x1dd,'r!W7')]['Pkcs7']}),_0x18a283=_0x20043f['enc'][_0x52bbdb(0x112,'DE*o')]['stringify'](_0x4bef63['ciphertext']);return _0x18a283;}}else{if(_0xa64d8c[_0x52bbdb(0x18b,'h2Lq')](_0xa64d8c['mZznR'],_0xa64d8c[_0x52bbdb(0xe0,'^T@m')]))_0x27d9c5=_0xa64d8c[_0x52bbdb(0x2d5,'s4iR')];else{if(_0xa64d8c[_0x52bbdb(0x1e7,'n)mc')](_0x4e9c10[_0x52bbdb(0x258,'2%9f')]['indexOf'](_0x52bbdb(0xd7,'SWPx')),-0x1)){if(_0xa64d8c[_0x52bbdb(0x165,'r!W7')]===_0xa64d8c[_0x52bbdb(0x23e,'SWPx')]){_0x5eb708[_0x52bbdb(0x2f2,'ip5r')](_0x52bbdb(0xbf,'D&)o'));return;}else await _0xa64d8c[_0x52bbdb(0x214,'r!W7')](joinRuning,_0x42f8d3);}else _0xa64d8c[_0x52bbdb(0x237,'06Qr')]!==_0xa64d8c[_0x52bbdb(0x1f1,'NLPU')]?_0x58dcdb[_0xe7bd78]=[_0x12ffdc]:(console['log']('\x0a【'+Tips+_0x52bbdb(0x19f,'aY24')+_0x42f8d3[_0x52bbdb(0x27c,'[z[c')]+'\x20赛跑状态】:\x20'+_0x4e9c10[_0x52bbdb(0x1c4,'3iDR')]),subTitle+='\x0a【'+Tips+_0x52bbdb(0x292,'n)mc')+_0x42f8d3['num']+'\x20赛跑状态】:\x20'+_0x4e9c10['message']);}}}else _0xdcd207['log'](_0x52bbdb(0x250,'6Ora'));}}else{let _0x584f6a=_0x373ded['wfTxl'],_0x3b4c38='';for(let _0x5c71f8=0x0;_0x5c71f8<_0x3e1a3d;_0x5c71f8++){let _0x265621=_0x144eb7[_0x52bbdb(0x2a8,'@23I')](_0x373ded[_0x52bbdb(0xd5,'Ll]7')](_0x384daa[_0x52bbdb(0xed,'MH[2')]()*_0x584f6a[_0x52bbdb(0x1b4,'[6HX')],0x1));_0x3b4c38+=_0x584f6a[_0x265621];}return _0x3b4c38;}}catch(_0x30ce74){}finally{_0xa64d8c['WouMF']('Xlxys',_0xa64d8c[_0x52bbdb(0x18a,'NLPU')])?_0x1229c0(_0x2c4b13):_0x2407c2(_0x42f8d3);};});});};function joinRuning(_0x2bcf88){const _0x3e2985=_0x537bc1,_0x4e36c0={'toqZR':function(_0x51fc9,_0x29daaa){return _0x51fc9(_0x29daaa);},'MdOkO':_0x3e2985(0x264,'#njV'),'idxdN':function(_0x19ce8b,_0x25e538){return _0x19ce8b===_0x25e538;},'zVoVr':_0x3e2985(0x278,'0^VC'),'QlnTt':_0x3e2985(0x1b2,'2%9f'),'qYTBM':function(_0x43ee7d,_0x53830e){return _0x43ee7d==_0x53830e;},'rjDrA':'ZXtEG','blQem':function(_0x2eb3ff,_0x44748c){return _0x2eb3ff!==_0x44748c;},'kwuHY':_0x3e2985(0x2a3,'@23I'),'Nhtrj':function(_0x395e6a,_0x19f028){return _0x395e6a(_0x19f028);},'HxaTW':'10010.woread.com.cn','yeleE':'no-cache','DSYou':_0x3e2985(0x1fe,'0^VC'),'Tlnda':_0x3e2985(0x19e,'P1pE'),'OYwQD':_0x3e2985(0xc0,'DE*o'),'NomaX':_0x3e2985(0x284,'mr40'),'HJzUP':'gzip,\x20deflate','HrYjT':function(_0x5ec8a9,_0x3f32ab){return _0x5ec8a9(_0x3f32ab);}};let _0x385b10=new Date()['getTime'](),_0x53587d=_0x4e36c0[_0x3e2985(0x1c7,'N[Jf')](getRandom,0xd),_0x1585c0=_0x3e2985(0x1b1,'jB*x')+_0x2bcf88[_0x3e2985(0x167,'LVQk')]+'\x22}';return new Promise(_0x40d5e2=>{const _0x522f0a=_0x3e2985,_0x5eda3b={'GFWdX':function(_0x23de97){return _0x23de97();}};let _0x126264={'url':_0x522f0a(0x227,'4Kui'),'headers':{'Host':_0x4e36c0[_0x522f0a(0x2c7,'4dNZ')],'content-length':_0x1585c0['length'],'pragma':_0x522f0a(0x246,'e#Qs'),'cache-control':_0x4e36c0[_0x522f0a(0x235,'mr40')],'accept':_0x522f0a(0x298,'SRE)'),'accesstoken':_0x4e36c0[_0x522f0a(0x2fb,'MkJx')],'user-agent':'Mozilla/5.0\x20(Linux;\x20Android\x2010;)','Content-Type':_0x522f0a(0x2eb,'m*GE'),'origin':_0x4e36c0[_0x522f0a(0x221,'Nrlc')],'x-requested-with':_0x522f0a(0xd9,'Ll]7'),'sec-fetch-site':_0x4e36c0[_0x522f0a(0x2a1,'4dNZ')],'sec-fetch-mode':_0x522f0a(0x306,'@23I'),'sec-fetch-dest':_0x4e36c0[_0x522f0a(0x168,'ol35')],'referer':'https://10010.woread.com.cn/ng_woread/','accept-encoding':_0x4e36c0[_0x522f0a(0x2e4,'NYe!')],'accept-language':'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'},'body':_0x1585c0};$[_0x522f0a(0x122,'3iDR')](_0x126264,async(_0xa9ea61,_0x5ba63f,_0x1cc5c0)=>{const _0x4093ae=_0x522f0a,_0x11014b={'GZDKG':function(_0x3d4941,_0x596299){const _0x1c11a7=_0x4e8e;return _0x4e36c0[_0x1c11a7(0x2a6,'D&)o')](_0x3d4941,_0x596299);}};try{if(_0x4e36c0['MdOkO']!==_0x4e36c0[_0x4093ae(0x18d,'NU7(')])_0x5eda3b[_0x4093ae(0x203,'g(Ye')](_0x57442b);else{if(_0xa9ea61)console[_0x4093ae(0x25a,'4dNZ')]('\x0a【'+Tips+_0x4093ae(0x1e3,'4Kui')+_0x2bcf88['num']+'\x20参加赛跑】:\x20返回\x20'+_0xa9ea61),subTitle+='\x0a【'+Tips+'提示---账号\x20'+_0x2bcf88[_0x4093ae(0xee,'zQdv')]+'\x20参加赛跑】:\x20返回\x20'+_0xa9ea61;else{if(_0x4e36c0[_0x4093ae(0x14e,'#njV')](_0x4e36c0[_0x4093ae(0xc3,'SWPx')],_0x4e36c0[_0x4093ae(0x2dc,'m*GE')]))_0x198c29=_0x4093ae(0x287,'[z[c');else{let _0x5b00b3=JSON[_0x4093ae(0xd8,'E]5J')](_0x1cc5c0);_0x4e36c0[_0x4093ae(0x10b,'s4iR')](_0x5b00b3[_0x4093ae(0x1c5,'aY24')],0x0)?_0x4e36c0['idxdN'](_0x4e36c0[_0x4093ae(0x12f,'0^VC')],_0x4e36c0[_0x4093ae(0xe9,'Nrlc')])?console[_0x4093ae(0x23c,'h2Lq')]('\x0a【'+Tips+_0x4093ae(0xbe,'hAuM')+_0x2bcf88[_0x4093ae(0x1b5,'DE*o')]+'\x20参加赛跑】:\x20'+_0x5b00b3['data']):_0x11014b['GZDKG'](_0x56754c,_0x3473df):(console[_0x4093ae(0xb9,'s4iR')]('\x0a【'+Tips+_0x4093ae(0x22b,'ol35')+_0x2bcf88['num']+'\x20参加赛跑】:\x20'+_0x5b00b3[_0x4093ae(0x29b,'ip5r')]),subTitle+='\x0a【'+Tips+_0x4093ae(0x2ab,'SWPx')+_0x2bcf88[_0x4093ae(0x241,'s4iR')]+'\x20参加赛跑】:\x20'+_0x5b00b3[_0x4093ae(0x117,'^T@m')]);}}}}catch(_0x2cc93c){}finally{if(_0x4e36c0[_0x4093ae(0x1d3,'@23I')](_0x4e36c0[_0x4093ae(0x103,'hAuM')],_0x4e36c0['kwuHY']))throw new _0xe94fbd('\x0a【作者提示】：验证脚本SHA失败,请勿修改脚本中任意内容\x0a');else _0x4e36c0[_0x4093ae(0xe1,'SRE)')](_0x40d5e2,_0x2bcf88);};});});}function _0x4e8e(_0x363a18,_0x2988f9){const _0x873c8f=_0x873c();return _0x4e8e=function(_0x4e8e61,_0x3a4dd4){_0x4e8e61=_0x4e8e61-0xb4;let _0x449042=_0x873c8f[_0x4e8e61];if(_0x4e8e['vSILSg']===undefined){var _0x3b3533=function(_0x217458){const _0x5082b1='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x5527b4='',_0x47e486='';for(let _0x41dd08=0x0,_0x49fc1a,_0x4640ce,_0x307ca6=0x0;_0x4640ce=_0x217458['charAt'](_0x307ca6++);~_0x4640ce&&(_0x49fc1a=_0x41dd08%0x4?_0x49fc1a*0x40+_0x4640ce:_0x4640ce,_0x41dd08++%0x4)?_0x5527b4+=String['fromCharCode'](0xff&_0x49fc1a>>(-0x2*_0x41dd08&0x6)):0x0){_0x4640ce=_0x5082b1['indexOf'](_0x4640ce);}for(let _0x1be574=0x0,_0x1cb87c=_0x5527b4['length'];_0x1be574<_0x1cb87c;_0x1be574++){_0x47e486+='%'+('00'+_0x5527b4['charCodeAt'](_0x1be574)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x47e486);};const _0x581065=function(_0x39e809,_0x5ef6b4){let _0x1b2535=[],_0x18cd8d=0x0,_0x37b63a,_0x20bd0b='';_0x39e809=_0x3b3533(_0x39e809);let _0x34bcf8;for(_0x34bcf8=0x0;_0x34bcf8<0x100;_0x34bcf8++){_0x1b2535[_0x34bcf8]=_0x34bcf8;}for(_0x34bcf8=0x0;_0x34bcf8<0x100;_0x34bcf8++){_0x18cd8d=(_0x18cd8d+_0x1b2535[_0x34bcf8]+_0x5ef6b4['charCodeAt'](_0x34bcf8%_0x5ef6b4['length']))%0x100,_0x37b63a=_0x1b2535[_0x34bcf8],_0x1b2535[_0x34bcf8]=_0x1b2535[_0x18cd8d],_0x1b2535[_0x18cd8d]=_0x37b63a;}_0x34bcf8=0x0,_0x18cd8d=0x0;for(let _0x53ee13=0x0;_0x53ee13<_0x39e809['length'];_0x53ee13++){_0x34bcf8=(_0x34bcf8+0x1)%0x100,_0x18cd8d=(_0x18cd8d+_0x1b2535[_0x34bcf8])%0x100,_0x37b63a=_0x1b2535[_0x34bcf8],_0x1b2535[_0x34bcf8]=_0x1b2535[_0x18cd8d],_0x1b2535[_0x18cd8d]=_0x37b63a,_0x20bd0b+=String['fromCharCode'](_0x39e809['charCodeAt'](_0x53ee13)^_0x1b2535[(_0x1b2535[_0x34bcf8]+_0x1b2535[_0x18cd8d])%0x100]);}return _0x20bd0b;};_0x4e8e['VNzYKW']=_0x581065,_0x363a18=arguments,_0x4e8e['vSILSg']=!![];}const _0x17f662=_0x873c8f[0x0],_0x55cb17=_0x4e8e61+_0x17f662,_0x534122=_0x363a18[_0x55cb17];return!_0x534122?(_0x4e8e['TUFrAx']===undefined&&(_0x4e8e['TUFrAx']=!![]),_0x449042=_0x4e8e['VNzYKW'](_0x449042,_0x3a4dd4),_0x363a18[_0x55cb17]=_0x449042):_0x449042=_0x534122,_0x449042;},_0x4e8e(_0x363a18,_0x2988f9);};function addreadtime(_0x11ee7a){const _0x313cc8=_0x537bc1,_0x4c498d={'CflgZ':function(_0x384095,_0x767278){return _0x384095-_0x767278;},'rFUAp':function(_0x2ab2a9,_0x2cfa21){return _0x2ab2a9*_0x2cfa21;},'awPUt':function(_0x51eadb,_0x5ad5d2){return _0x51eadb!==_0x5ad5d2;},'kobKp':_0x313cc8(0x158,'E]5J'),'JfOVV':function(_0x2612f8,_0x5c3b20){return _0x2612f8==_0x5c3b20;},'GRdbb':_0x313cc8(0x12c,'D&)o'),'ZcZIz':function(_0x598e91,_0x2f2dcd){return _0x598e91(_0x2f2dcd);},'CyYZd':_0x313cc8(0x28a,'Nrlc'),'jSJqO':'no-cache','EpYgT':_0x313cc8(0x125,'NU7('),'sVbeD':_0x313cc8(0x2e2,'MkJx'),'zEWqx':_0x313cc8(0x23f,'E]5J'),'yDaYb':'cors','yTvwp':'empty','qlcqU':_0x313cc8(0x2ad,'#njV'),'BLDtl':'gzip,\x20deflate','nUPpN':_0x313cc8(0x14c,'jB*x'),'USXJc':function(_0x18c134,_0x575c72){return _0x18c134(_0x575c72);},'ELRBc':'history/addReadTime','YXxox':function(_0x5cb05e,_0x556a8a){return _0x5cb05e===_0x556a8a;},'iNEpG':_0x313cc8(0x231,'E]5J'),'LeSqe':_0x313cc8(0x18c,'n)mc')};let _0x4945cd=new Date()[_0x313cc8(0x146,'SRE)')](),_0x2e071f=_0x4c498d['USXJc'](getRandom,0xd),_0x581ca3='';if(_0x11ee7a[_0x313cc8(0x1df,'hAuM')]['indexOf']('='))_0x581ca3=_0x4c498d[_0x313cc8(0x201,'AW%A')];else{if(_0x4c498d[_0x313cc8(0x10c,'W#pm')](_0x4c498d[_0x313cc8(0x1f9,'6Ora')],_0x4c498d[_0x313cc8(0x18f,'4Kui')])){let _0xea6feb=_0x456b15[_0x313cc8(0x210,'E]5J')](_0x4c498d[_0x313cc8(0xc2,'NU7(')](_0x4c498d[_0x313cc8(0x1d6,'06Qr')](_0xd97f89[_0x313cc8(0xf6,'0^VC')](),_0x14e77c['length']),0x1));_0x5729ac+=_0x133e82[_0xea6feb];}else _0x581ca3='basics/addreadtime';}let _0x18eab4='{\x22sign\x22:\x22'+_0x11ee7a['yd_sign']+'\x22}';return new Promise(_0x5557b7=>{const _0x49240c=_0x313cc8,_0x5bf148={'dkcDN':function(_0x219184,_0x1af651){return _0x219184+_0x1af651;},'zViCe':function(_0x5aab85,_0x8cd64b){return _0x4c498d['awPUt'](_0x5aab85,_0x8cd64b);},'HlwpN':'mTuva','YUXbq':function(_0x482f1d,_0x4eeea7){return _0x482f1d===_0x4eeea7;},'BZTLh':_0x4c498d[_0x49240c(0xdf,'ip5r')],'pWURx':function(_0x227578,_0x10eb06){return _0x4c498d['JfOVV'](_0x227578,_0x10eb06);},'iftBJ':_0x4c498d[_0x49240c(0x208,'[z[c')],'fAxpb':function(_0x509aa4,_0x32bdd6){const _0x4619cf=_0x49240c;return _0x4c498d[_0x4619cf(0xf2,'4dNZ')](_0x509aa4,_0x32bdd6);}};let _0x22e6d2={'url':'https://10010.woread.com.cn/ng_woread_service/rest/'+_0x581ca3+'?','headers':{'Host':_0x4c498d['CyYZd'],'content-length':_0x18eab4[_0x49240c(0x1a4,'DE*o')],'pragma':'no-cache','cache-control':_0x4c498d['jSJqO'],'accept':_0x4c498d[_0x49240c(0x161,'P1pE')],'accesstoken':_0x49240c(0x296,'SRE)'),'user-agent':'Mozilla/5.0\x20(Linux;\x20Android\x2010;)','Content-Type':_0x4c498d[_0x49240c(0x104,'ip5r')],'origin':_0x49240c(0x1ec,'DE*o'),'x-requested-with':_0x4c498d['zEWqx'],'sec-fetch-site':_0x49240c(0x189,'Nrlc'),'sec-fetch-mode':_0x4c498d['yDaYb'],'sec-fetch-dest':_0x4c498d[_0x49240c(0x282,'n)mc')],'referer':_0x4c498d['qlcqU'],'accept-encoding':_0x4c498d[_0x49240c(0x1d9,'NLPU')],'accept-language':_0x4c498d[_0x49240c(0x22d,'n)mc')]},'body':_0x18eab4};$['post'](_0x22e6d2,async(_0xc0e599,_0x5d6436,_0x319cc5)=>{const _0x11df8f=_0x49240c,_0x8dacfd={'twCys':function(_0x38ade4,_0x392056){const _0x4ba36e=_0x4e8e;return _0x5bf148[_0x4ba36e(0x251,'NYe!')](_0x38ade4,_0x392056);}};try{if(_0xc0e599)console[_0x11df8f(0x28c,'NU7(')]('\x0a【'+Tips+_0x11df8f(0x26a,'2%9f')+_0x11ee7a[_0x11df8f(0x23d,'06Qr')]+_0x11df8f(0x2d0,'aY24')+_0xc0e599),subTitle+='\x0a【'+Tips+_0x11df8f(0x14b,'P1pE')+_0x11ee7a[_0x11df8f(0x1c3,'@23I')]+'\x20阅读】:\x20返回\x20'+_0xc0e599;else{if(_0x5bf148[_0x11df8f(0x2d1,'ol35')]('mTuva',_0x5bf148['HlwpN']))_0x311565['push']({'num':_0x8dacfd['twCys'](_0x5ad96a,0x1),'token':_0x4fdc71[_0x41e640][_0x11df8f(0x1de,'D&)o')]('&')[0x2],'yd_sign':_0x482bd4[_0x7f8f6c][_0x11df8f(0x17d,'NU7(')]('&')[0x0],'gt_sign':_0x55ce79[_0x5e7d80][_0x11df8f(0xdb,'#njV')]('&')[0x1]});else{let _0x7ad5c4=JSON[_0x11df8f(0xf5,'aY24')](_0x319cc5);_0x7ad5c4[_0x11df8f(0x151,'0^VC')]==0x0?_0x5bf148[_0x11df8f(0x1ee,'e#Qs')](_0x5bf148[_0x11df8f(0x2ff,'NLPU')],'OaRKY')?(console[_0x11df8f(0x145,'ol35')]('\x0a【'+Tips+'提示---账号\x20'+_0x11ee7a[_0x11df8f(0x124,'4Kui')]+_0x11df8f(0x28e,'Nrlc')+_0x7ad5c4[_0x11df8f(0x1cc,'jB*x')][_0x11df8f(0x164,'[6HX')]/0xea60+'分钟'),_0x5bf148['pWURx'](_0x7ad5c4[_0x11df8f(0x2d7,'[6HX')][_0x11df8f(0x1cf,'NYe!')],0x1e)&&(_0x5bf148[_0x11df8f(0xc9,'Qbj@')](_0x5bf148[_0x11df8f(0x21b,'e#Qs')],_0x11df8f(0x1c0,'^T@m'))?await _0x5bf148['fAxpb'](doDraw,_0x11ee7a):_0x14f721(_0xe21c14))):_0x30b235[_0xc8a370][_0x11df8f(0x1bc,'n)mc')](_0x5cad31):(console[_0x11df8f(0xc5,'AW%A')]('\x0a【'+Tips+'提示---账号\x20'+_0x11ee7a[_0x11df8f(0x11f,'4dNZ')]+_0x11df8f(0x185,'SRE)')+_0x7ad5c4[_0x11df8f(0x1a5,'Nrlc')]),subTitle+='\x0a【'+Tips+'提示---账号\x20'+_0x11ee7a[_0x11df8f(0x200,'r!W7')]+_0x11df8f(0x2db,'D&)o')+_0x7ad5c4[_0x11df8f(0x266,'4Kui')]);}}}catch(_0x53ada2){}finally{_0x5bf148[_0x11df8f(0x22c,'SRE)')](_0x5557b7,_0x11ee7a);};});});};function doDraw(_0x15960e){const _0x118e2d=_0x537bc1,_0x126282={'FVdor':_0x118e2d(0x20a,'MkJx'),'YHuXm':function(_0xc334ae,_0x123ba3){return _0xc334ae==_0x123ba3;},'PCycH':function(_0x492129,_0x276fda){return _0x492129!==_0x276fda;},'fjgvU':_0x118e2d(0x102,'AW%A'),'ymIbN':function(_0x5e475b,_0x31e4d0){return _0x5e475b(_0x31e4d0);},'upifr':_0x118e2d(0x21d,'LVQk'),'jRhEg':_0x118e2d(0x159,'4dNZ'),'xjavB':_0x118e2d(0x298,'SRE)'),'pbeCV':_0x118e2d(0x1af,'%doh'),'bjlhF':_0x118e2d(0x1bb,'NYe!'),'JRbmI':_0x118e2d(0x162,'%doh'),'ZSrrY':'cors','hOAen':_0x118e2d(0x10e,'IjQi'),'bxNMA':_0x118e2d(0x196,'s4iR'),'dKKBC':'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'};let _0x965d2e=new Date()[_0x118e2d(0x233,'Qbj@')](),_0xfa54ff=_0x126282[_0x118e2d(0x11b,'P1pE')](getRandom,0xd),_0x7e8efe='acticeindex='+_0x15960e[_0x118e2d(0x2cf,'^T@m')]+_0x118e2d(0x2f3,'IjQi')+_0x965d2e;return new Promise(_0x372869=>{const _0x488d25=_0x118e2d,_0x4cb820={'peDYW':_0x126282['FVdor'],'dcDAD':function(_0x4383c8,_0x45a425){const _0x3d520d=_0x4e8e;return _0x126282[_0x3d520d(0x16e,'hAuM')](_0x4383c8,_0x45a425);},'gSTUv':function(_0x49e589,_0x1bf82d){const _0x3d1dd0=_0x4e8e;return _0x126282[_0x3d1dd0(0x2c2,'e#Qs')](_0x49e589,_0x1bf82d);},'mqmWW':_0x126282[_0x488d25(0x2a9,'[z[c')],'thDHD':function(_0x4d3e41,_0x3d073a){return _0x4d3e41===_0x3d073a;},'AxEtP':_0x488d25(0x199,'0^VC'),'TcQss':function(_0x5b8181,_0x2aa51c){const _0x1f3ebf=_0x488d25;return _0x126282[_0x1f3ebf(0x206,'D)fH')](_0x5b8181,_0x2aa51c);}};let _0x4f3950={'url':_0x488d25(0x150,'MkJx'),'headers':{'Host':_0x126282['upifr'],'content-length':_0x7e8efe['length'],'pragma':_0x126282[_0x488d25(0xfc,'2%9f')],'cache-control':_0x126282[_0x488d25(0x160,'[6HX')],'accept':_0x126282['xjavB'],'accesstoken':_0x488d25(0x313,'%doh'),'user-agent':_0x126282['pbeCV'],'Content-Type':_0x126282[_0x488d25(0x261,'P1pE')],'origin':_0x126282['JRbmI'],'x-requested-with':_0x488d25(0xf8,'r!W7'),'sec-fetch-site':_0x488d25(0x1d0,'jB*x'),'sec-fetch-mode':_0x126282['ZSrrY'],'sec-fetch-dest':_0x126282[_0x488d25(0x1b0,'IjQi')],'referer':_0x488d25(0x205,'Kf3Z'),'accept-encoding':_0x126282[_0x488d25(0x28d,'hAuM')],'accept-language':_0x126282[_0x488d25(0x163,'#njV')]},'body':_0x7e8efe};$[_0x488d25(0x1a3,'NLPU')](_0x4f3950,async(_0x5c3e9c,_0x54a5d1,_0x17d401)=>{const _0x5b12fa=_0x488d25;try{if(_0x4cb820[_0x5b12fa(0x12e,'4Kui')]===_0x4cb820[_0x5b12fa(0x16b,'LVQk')]){if(_0x5c3e9c)console['log']('\x0a【'+Tips+_0x5b12fa(0x2b5,'AW%A')+_0x15960e[_0x5b12fa(0x1f7,'D)fH')]+_0x5b12fa(0x2d4,'g(Ye')+_0x5c3e9c),subTitle+='\x0a【'+Tips+_0x5b12fa(0xef,'[6HX')+_0x15960e[_0x5b12fa(0x240,'6Ora')]+'\x20抽奖】:\x20返回\x20'+_0x5c3e9c;else{let _0x14a275=JSON['parse'](_0x17d401);_0x4cb820[_0x5b12fa(0x24d,'0^VC')](_0x14a275[_0x5b12fa(0x1a1,'[z[c')],0x0)?_0x4cb820[_0x5b12fa(0x290,'g(Ye')](_0x4cb820['mqmWW'],_0x4cb820[_0x5b12fa(0x2f8,'SWPx')])?(_0x46dbf7['log']('\x0a【'+_0x3e4beb+_0x5b12fa(0x1bf,'mr40')+_0x267787[_0x5b12fa(0x142,'MH[2')]+'\x20参加赛跑】:\x20返回\x20'+_0x5aa79b),_0x544075+='\x0a【'+_0xa18a64+_0x5b12fa(0x133,'6Ora')+_0x6b5bd5[_0x5b12fa(0x2ac,'Qbj@')]+_0x5b12fa(0x2a0,'3iDR')+_0x3590ac):(console[_0x5b12fa(0x1a8,'D&)o')]('\x0a【'+Tips+_0x5b12fa(0x204,'06Qr')+_0x15960e['num']+_0x5b12fa(0x17b,'#njV')+_0x14a275[_0x5b12fa(0x16d,'hAuM')]),await Sleep_time(0x1,0x2),await doDraw(_0x15960e)):(console[_0x5b12fa(0x28c,'NU7(')]('\x0a【'+Tips+'提示---账号\x20'+_0x15960e['num']+'\x20抽奖】:\x20'+_0x14a275[_0x5b12fa(0x266,'4Kui')]),subTitle+='\x0a【'+Tips+_0x5b12fa(0x10f,'E]5J')+_0x15960e[_0x5b12fa(0xe3,'e#Qs')]+_0x5b12fa(0x2a7,'AW%A')+_0x14a275[_0x5b12fa(0x2f7,'MkJx')]);}}else _0x2b0b57[_0x5b12fa(0x118,'06Qr')]('\x0a【'+_0x1ed14a+_0x5b12fa(0xef,'[6HX')+_0xa6b087[_0x5b12fa(0x1f0,'n)mc')]+_0x5b12fa(0xcf,'4Kui')+_0x384e93[_0x5b12fa(0x2f7,'MkJx')]),_0x160ab1+='\x0a【'+_0x30d05c+_0x5b12fa(0x1d4,'m*GE')+_0x4f2dd3[_0x5b12fa(0x21a,'aY24')]+_0x5b12fa(0x2f0,'DE*o')+_0x3c1f32[_0x5b12fa(0x2de,'@23I')];}catch(_0x5d64ab){}finally{_0x4cb820['thDHD'](_0x4cb820['AxEtP'],_0x4cb820['AxEtP'])?_0x4cb820['TcQss'](_0x372869,_0x15960e):(_0x344351[_0x5b12fa(0x1e2,'W#pm')]('\x0a【'+_0x2afb53+'提示---账号\x20'+_0x135b68[_0x5b12fa(0x252,'[6HX')]+_0x5b12fa(0x2fa,'m*GE')+_0x5dadc7),_0x239524+='\x0a【'+_0x9d9057+_0x5b12fa(0x105,'W#pm')+_0x572723[_0x5b12fa(0x1cf,'NYe!')]+_0x5b12fa(0xe6,'@23I')+_0x2a0daa);};});});};function wakeRabbit(_0x4bbb35){const _0x323423=_0x537bc1,_0x5a4514={'VAJXw':_0x323423(0x1ca,'NU7('),'raaQS':_0x323423(0x129,'SRE)'),'BitbI':function(_0x43f012,_0x321085){return _0x43f012===_0x321085;},'EDfHT':_0x323423(0xf3,'4Kui'),'mvZik':_0x323423(0x29c,'mr40'),'oeYQj':_0x323423(0xde,'NU7('),'ZrmVG':_0x323423(0x130,'AW%A'),'ChGRP':'dCMdm','zYTEk':'KaVtL','EMkBa':function(_0x3f377f,_0x4e7e){return _0x3f377f(_0x4e7e);},'GUWWh':function(_0x30d997,_0x2f47a4){return _0x30d997*_0x2f47a4;},'PAFdT':function(_0xafdc1f,_0x29ccfe){return _0xafdc1f<_0x29ccfe;},'IicPM':function(_0x3259f2,_0x48b157){return _0x3259f2+_0x48b157;},'fgTMv':function(_0x37e80e,_0x50e6e4){return _0x37e80e+_0x50e6e4;},'Ytyxn':'JMPAB','OKByh':'10010.woread.com.cn','inocp':_0x323423(0x173,'NYe!'),'BnUWk':_0x323423(0x12a,'N[Jf'),'xSUxH':_0x323423(0x21e,'DE*o'),'oDPGs':_0x323423(0x2fd,'s4iR'),'bTSRJ':'cors','bzWtD':'empty','EVCYf':'gzip,\x20deflate','oMCvE':_0x323423(0x238,'zQdv')};let _0x444223=new Date()[_0x323423(0x2e6,'#njV')](),_0x4ac796=_0x5a4514['EMkBa'](getRandom,0xd),_0x417e68='{\x22sign\x22:\x22'+_0x4bbb35['gt_sign']+'\x22}';return new Promise(_0x12dfba=>{const _0x5771c6=_0x323423,_0x94da3e={'WgoNc':function(_0x3bc59d,_0x40b168){const _0x5e7cee=_0x4e8e;return _0x5a4514[_0x5e7cee(0x123,'%doh')](_0x3bc59d,_0x40b168);},'JMmEx':function(_0x3273e0,_0x5c7b3c){return _0x3273e0+_0x5c7b3c;},'vjsai':function(_0x24f82a,_0x4fbd61){const _0x296732=_0x4e8e;return _0x5a4514[_0x296732(0x13e,'N[Jf')](_0x24f82a,_0x4fbd61);},'nOyUc':function(_0x485f78,_0x6fb0c2){return _0x485f78+_0x6fb0c2;},'hWbCE':function(_0x49d051,_0x5acc42){return _0x49d051+_0x5acc42;},'nTjrx':function(_0x4ef4f5,_0x18b3b1){return _0x4ef4f5<_0x18b3b1;},'pPOur':function(_0x2f1818,_0x24f709){const _0x477e49=_0x4e8e;return _0x5a4514[_0x477e49(0x2d6,'r!W7')](_0x2f1818,_0x24f709);},'fzkUo':function(_0x57b547,_0x196f3c){const _0x53c37b=_0x4e8e;return _0x5a4514[_0x53c37b(0x110,'N[Jf')](_0x57b547,_0x196f3c);}};if(_0x5a4514['BitbI'](_0x5a4514[_0x5771c6(0xc7,'W#pm')],_0x5771c6(0x183,'6Ora')))_0x11bfc0?_0x2a55f0=_0x5a4514[_0x5771c6(0x283,'NLPU')]:_0x2f44ef=_0x5d8574;else{let _0x4b35e4={'url':'https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/wakeRabbit','headers':{'Host':_0x5a4514[_0x5771c6(0x17e,'DE*o')],'content-length':_0x417e68[_0x5771c6(0x19d,'#njV')],'pragma':_0x5a4514['inocp'],'cache-control':'no-cache','accept':_0x5a4514[_0x5771c6(0x22e,'P1pE')],'accesstoken':_0x5771c6(0x16f,'06Qr'),'user-agent':_0x5a4514[_0x5771c6(0x228,'E]5J')],'Content-Type':'application/json;charset=UTF-8','origin':_0x5771c6(0x1cb,'SWPx'),'x-requested-with':_0x5a4514['oDPGs'],'sec-fetch-site':_0x5771c6(0xcd,'7]Rl'),'sec-fetch-mode':_0x5a4514[_0x5771c6(0x195,'IjQi')],'sec-fetch-dest':_0x5a4514[_0x5771c6(0x309,'@23I')],'referer':_0x5771c6(0x24f,'6Ora'),'accept-encoding':_0x5a4514[_0x5771c6(0x119,'MH[2')],'accept-language':_0x5a4514['oMCvE']},'body':_0x417e68};$[_0x5771c6(0x2a4,'0^VC')](_0x4b35e4,async(_0x16a907,_0x370f81,_0x594a96)=>{const _0x522418=_0x5771c6,_0x4a0871={'chqFr':function(_0x5d2340,_0x3eb7fb){return _0x5d2340(_0x3eb7fb);}};if(_0x5a4514[_0x522418(0x294,'zQdv')]===_0x5a4514[_0x522418(0x197,'N[Jf')]){try{if(_0x16a907)_0x5a4514[_0x522418(0x1f8,'Ll]7')](_0x5a4514[_0x522418(0x2b8,'h2Lq')],_0x5a4514[_0x522418(0x234,'P1pE')])?_0x4a0871[_0x522418(0x2f9,'Kf3Z')](_0x2343e0,_0x2da76f):(console[_0x522418(0x19c,'[6HX')]('\x0a【'+Tips+_0x522418(0x285,'@23I')+_0x4bbb35[_0x522418(0x310,'ip5r')]+_0x522418(0x1d1,'7]Rl')+_0x16a907),subTitle+='\x0a【'+Tips+_0x522418(0x2ed,'NYe!')+_0x4bbb35[_0x522418(0x13c,'E]5J')]+'\x20唤醒小兔】:\x20返回\x20'+_0x16a907);else{if(_0x5a4514['BitbI'](_0x5a4514[_0x522418(0x25c,'4dNZ')],_0x522418(0x29e,'^T@m'))){let _0x18c1a6=JSON['parse'](_0x594a96);_0x18c1a6['code']==0x0?_0x5a4514['ZrmVG']!==_0x5a4514[_0x522418(0x20c,'D&)o')]?(console['log']('\x0a【'+Tips+_0x522418(0x1e6,'NLPU')+_0x4bbb35[_0x522418(0x252,'[6HX')]+_0x522418(0x2cd,'N[Jf')+_0x18c1a6[_0x522418(0x149,'g(Ye')]['prizedesc']+','+_0x18c1a6[_0x522418(0x107,'@23I')]['winprizedesc']),subTitle+='\x0a【'+Tips+_0x522418(0x2ab,'SWPx')+_0x4bbb35['num']+'\x20唤醒小兔】:\x20获得'+_0x18c1a6[_0x522418(0x149,'g(Ye')][_0x522418(0xb7,'ol35')]+','+_0x18c1a6[_0x522418(0x1cc,'jB*x')]['winprizedesc']):_0x53ee13=_0x427c7c[_0x522418(0x143,'m*GE')](/(\S*)TG_ID:@ls_soy/)[0x1]:_0x522418(0xea,'Nrlc')==='OLYPn'?_0x24d217=_0x1f9e69['env']['soy_ltgtsp_data'][_0x522418(0x192,'Qbj@')]():(console[_0x522418(0x136,'zQdv')]('\x0a【'+Tips+_0x522418(0x2ba,'h2Lq')+_0x4bbb35[_0x522418(0xee,'zQdv')]+_0x522418(0x1ce,'r!W7')+_0x18c1a6[_0x522418(0x1da,'SRE)')]),subTitle+='\x0a【'+Tips+'提示---账号\x20'+_0x4bbb35[_0x522418(0x142,'MH[2')]+'\x20唤醒小兔】:\x20'+_0x18c1a6['message']);}else _0x57a739['log']('\x0a【'+_0x3df688+_0x522418(0x19a,'N[Jf')+_0x4b921e['num']+'\x20参加赛跑】:\x20'+_0x1e4771[_0x522418(0x2ae,'6Ora')]),_0x5ee6d5+='\x0a【'+_0x2decf5+_0x522418(0x128,'Kf3Z')+_0x225e92[_0x522418(0x2ac,'Qbj@')]+_0x522418(0x215,'NU7(')+_0x4eeb1b[_0x522418(0x17a,'4dNZ')];}}catch(_0x37bc39){}finally{'QOiFt'!==_0x5a4514[_0x522418(0x1ad,'Nrlc')]?_0x5a4514[_0x522418(0x12b,'mr40')](_0x12dfba,_0x4bbb35):(_0x5d2c1b[_0x522418(0x28c,'NU7(')]('\x0a【'+_0xfe8239+_0x522418(0x2fc,'4dNZ')+_0x42e305[_0x522418(0x1c3,'@23I')]+_0x522418(0x2c5,'h2Lq')+_0x4fef60[_0x522418(0x1c4,'3iDR')]),_0x109543+='\x0a【'+_0x42aa98+_0x522418(0x2ed,'NYe!')+_0x49e71a['num']+_0x522418(0x26e,'s4iR')+_0x5dcc27[_0x522418(0x1e1,'P1pE')]);};}else{var _0xfeb020=new _0xb04f5b(_0x94da3e[_0x522418(0xf4,'^T@m')](_0x4c3ef0,0x3e8)),_0x5c55a0=_0x94da3e['JMmEx'](_0xfeb020['getFullYear'](),'-'),_0x7ccf1e=(_0x94da3e[_0x522418(0x1fc,'Kf3Z')](_0x94da3e['JMmEx'](_0xfeb020[_0x522418(0x1c1,'aY24')](),0x1),0xa)?_0x94da3e[_0x522418(0x1dc,'MkJx')]('0',_0x94da3e['nOyUc'](_0xfeb020[_0x522418(0xfe,'#njV')](),0x1)):_0xfeb020[_0x522418(0x302,'P1pE')]()+0x1)+'-',_0x4c6b8b=_0x94da3e[_0x522418(0x280,'jB*x')](_0xfeb020['getDate'](),'\x20'),_0x5a9388=_0x94da3e['nOyUc'](_0xfeb020['getHours'](),':'),_0x402bfe=_0x94da3e['nOyUc'](_0x94da3e['nTjrx'](_0xfeb020[_0x522418(0x22a,'n)mc')](),0xa)?_0x94da3e[_0x522418(0x2e1,'ol35')]('0',_0xfeb020[_0x522418(0x1ab,'D&)o')]()):_0xfeb020[_0x522418(0x138,'P1pE')](),':'),_0x32b350=_0xfeb020[_0x522418(0x25e,'@23I')]();let _0x4325c1=_0x94da3e[_0x522418(0x169,'P1pE')](_0x94da3e[_0x522418(0x26c,'P1pE')](_0x94da3e[_0x522418(0x2c3,'ip5r')](_0x94da3e[_0x522418(0x184,'AW%A')](_0x94da3e[_0x522418(0xf1,'W#pm')](_0x5c55a0,_0x7ccf1e),_0x4c6b8b),_0x5a9388),_0x402bfe),_0x32b350);return _0x94da3e['pPOur'](_0x94da3e[_0x522418(0x15f,'^T@m')](_0x94da3e[_0x522418(0x29d,'Qbj@')](_0x94da3e['pPOur'](_0x5c55a0,_0x7ccf1e),_0x4c6b8b),_0x5a9388),_0x402bfe)+_0x32b350;}});}});};function encryptAes(_0x2192d0){const _0x38fc3f=_0x537bc1;let _0x5906ea=CryptoJs[_0x38fc3f(0x2bc,'ip5r')][_0x38fc3f(0x13a,'aY24')](CryptoJs[_0x38fc3f(0x10d,'SWPx')][_0x38fc3f(0x27f,'06Qr')][_0x38fc3f(0x21f,'^T@m')](_0x2192d0),CryptoJs[_0x38fc3f(0x1c6,'zQdv')][_0x38fc3f(0x106,'m*GE')][_0x38fc3f(0x21f,'^T@m')](_0x38fc3f(0x273,'%doh')),{'iv':CryptoJs[_0x38fc3f(0x2f5,'m*GE')]['Utf8']['parse'](_0x38fc3f(0x147,'g(Ye')),'mode':CryptoJs[_0x38fc3f(0x25f,'NLPU')][_0x38fc3f(0x170,'%doh')],'padding':CryptoJs[_0x38fc3f(0x1e8,'#njV')][_0x38fc3f(0x1fd,'g(Ye')]}),_0x50e95f=CryptoJs[_0x38fc3f(0x1e0,'^T@m')]['Base64']['stringify'](_0x5906ea['ciphertext']);return _0x50e95f;};async function Sleep_time(_0x4d7a0f,_0x883e90){const _0x5d596b=_0x537bc1,_0x289272={'qMisJ':function(_0x5033a5,_0x15be81){return _0x5033a5*_0x15be81;},'BytlI':function(_0x1a10b4,_0x54c1b6){return _0x1a10b4+_0x54c1b6;},'xGMSM':function(_0x409981,_0x25faf5){return _0x409981*_0x25faf5;}};await $[_0x5d596b(0xd0,'LVQk')](Math[_0x5d596b(0x2f4,'NLPU')](_0x289272[_0x5d596b(0x1e5,'Kf3Z')](Math['random'](),_0x289272[_0x5d596b(0x127,'Qbj@')](_0x883e90*0x3e8-_0x4d7a0f*0x3e8,0x1)))+_0x289272[_0x5d596b(0x2b4,'0^VC')](_0x4d7a0f,0x3e8));}function getRandom(_0x5e8f7f){const _0x247ef8=_0x537bc1,_0x55faa3={'Qrzhq':_0x247ef8(0x176,'06Qr'),'ZuBSJ':function(_0x34e165,_0x41b658){return _0x34e165<_0x41b658;},'oOdyT':function(_0x485179,_0x4bf7ed){return _0x485179!==_0x4bf7ed;},'xBFMC':_0x247ef8(0x2ef,'4Kui'),'EEAgb':_0x247ef8(0x2a5,'IjQi'),'wxgvW':function(_0x57d1c2,_0x2870a4){return _0x57d1c2-_0x2870a4;},'UcpNW':function(_0x32e3ec,_0x72eba4){return _0x32e3ec*_0x72eba4;}};let _0x58d26e=_0x55faa3[_0x247ef8(0x178,'m*GE')],_0x414d25='';for(let _0x392b9d=0x0;_0x55faa3[_0x247ef8(0x2b0,'7]Rl')](_0x392b9d,_0x5e8f7f);_0x392b9d++){if(_0x55faa3['oOdyT'](_0x55faa3[_0x247ef8(0x198,'6Ora')],_0x55faa3['EEAgb'])){let _0x327e33=Math[_0x247ef8(0x27b,'h2Lq')](_0x55faa3['wxgvW'](_0x55faa3[_0x247ef8(0x148,'7]Rl')](Math[_0x247ef8(0x114,'mr40')](),_0x58d26e[_0x247ef8(0xfa,'MkJx')]),0x1));_0x414d25+=_0x58d26e[_0x327e33];}else _0x273162=_0x4b14c8[_0x247ef8(0x19b,'LVQk')]['soy_ltgtsp_data'][_0x247ef8(0x11d,'NLPU')]('#');}return _0x414d25;}function getnum(_0x23fecc){const _0x2588ee=_0x537bc1,_0x473058={'xcEuP':'0123456789','FQzQA':function(_0x2d90c6,_0x270ca1){return _0x2d90c6<_0x270ca1;},'CSdpL':function(_0x22c8ad,_0x357e6d){return _0x22c8ad-_0x357e6d;},'RbaEk':function(_0x445118,_0x25ca71){return _0x445118*_0x25ca71;}};let _0x39acaa=_0x473058[_0x2588ee(0x182,'P1pE')],_0x2ed96f='';for(let _0x16bcf9=0x0;_0x473058[_0x2588ee(0x226,'r!W7')](_0x16bcf9,_0x23fecc);_0x16bcf9++){let _0x1a89e6=Math[_0x2588ee(0x2bd,'IjQi')](_0x473058['CSdpL'](_0x473058[_0x2588ee(0x30c,'IjQi')](Math['random'](),_0x39acaa[_0x2588ee(0x1b4,'[6HX')]),0x1));_0x2ed96f+=_0x39acaa[_0x1a89e6];}return _0x2ed96f;}function yyz_getip(){const _0x1e648c=_0x537bc1,_0x478e9a={'cQOkS':function(_0x401a03,_0x8c0b8c){return _0x401a03(_0x8c0b8c);},'MefXR':function(_0x47daba,_0x1adc68){return _0x47daba!==_0x1adc68;},'pvUHQ':'nqAZm','ipkcq':_0x1e648c(0x245,'RBpK'),'YAyZf':_0x1e648c(0x13f,'IjQi'),'QENNW':function(_0x4cfe6c){return _0x4cfe6c();}};let _0x5214da={'url':_0x1e648c(0x2e8,'@23I')};return new Promise((_0x585184,_0x909b7f)=>{const _0x2e065f=_0x1e648c,_0x54c388={'HdZyp':function(_0x4d0619,_0x403fcc){const _0x568bc4=_0x4e8e;return _0x478e9a[_0x568bc4(0x236,'e#Qs')](_0x4d0619,_0x403fcc);},'VrLye':function(_0x58f43b,_0x56e50b){return _0x478e9a['MefXR'](_0x58f43b,_0x56e50b);},'LacOz':_0x2e065f(0x209,'W#pm'),'LpfVl':'pJIcL','VpGyo':_0x478e9a[_0x2e065f(0x274,'g(Ye')],'JmkVj':_0x2e065f(0x2dd,'SRE)'),'tHKuX':_0x478e9a['ipkcq'],'TqqTR':_0x2e065f(0x288,'P1pE'),'jQLZr':function(_0x258007,_0x4affc2){return _0x258007===_0x4affc2;},'TGBlp':_0x478e9a[_0x2e065f(0x2e3,'RBpK')],'yKvHV':function(_0x159104){const _0x9b5394=_0x2e065f;return _0x478e9a[_0x9b5394(0x1ff,'NU7(')](_0x159104);}};$[_0x2e065f(0x181,'0^VC')](_0x5214da,async(_0x3beac2,_0x228ad3,_0x113a2d)=>{const _0x932786=_0x2e065f;if(_0x54c388[_0x932786(0x25b,'DE*o')](_0x54c388[_0x932786(0x211,'Ll]7')],_0x54c388[_0x932786(0x279,'MkJx')]))_0x312768['log']('\x0a【'+_0x3b5d69+'提示---账号\x20'+_0x52f425[_0x932786(0x200,'r!W7')]+'\x20阅读】:\x20返回\x20'+_0x3ae2c1),_0x226a04+='\x0a【'+_0x38a75b+_0x932786(0x14b,'P1pE')+_0x570cd3[_0x932786(0x24c,'7]Rl')]+'\x20阅读】:\x20返回\x20'+_0x1686b4;else try{_0x932786(0x271,'[z[c')===_0x54c388[_0x932786(0x1ae,'m*GE')]?_0x3beac2?_0x54c388['VrLye'](_0x54c388['VpGyo'],_0x54c388['VpGyo'])?_0x5527b4=_0x47e486[_0x932786(0x13b,'06Qr')]()?_0x54c388[_0x932786(0x219,'MH[2')](_0x41dd08,_0x932786(0x111,'#njV')):'':IP_address=_0x54c388['JmkVj']:'fPuNw'==='fPuNw'?IP_address=_0x113a2d:_0x545fc6=_0x4728c1[_0x932786(0x1a7,'RBpK')][_0x932786(0x256,'SRE)')][_0x932786(0x17d,'NU7(')]('@'):(_0x3845f9[_0x932786(0x126,'SWPx')]('\x0a【'+_0x964408+'提示---账号\x20'+_0x8f038['num']+_0x932786(0x269,'g(Ye')+_0x2a2158),_0x358c2a+='\x0a【'+_0x2811c2+_0x932786(0xef,'[6HX')+_0x169587[_0x932786(0x25d,'^T@m')]+_0x932786(0x1e9,'MH[2')+_0x3eccd2);}catch(_0x461a0d){_0x54c388['VrLye'](_0x54c388[_0x932786(0x268,'MkJx')],_0x54c388[_0x932786(0x1ac,'mr40')])?IP_address='127.0.0.1':_0x5d91d4[_0x48d1cb]?_0x562fb6[_0xc336e1][_0x932786(0x11a,'4dNZ')](_0x3eb0a2):_0x441253[_0x9f7d26]=[_0x560fff];}finally{_0x54c388[_0x932786(0x2d9,'E]5J')](_0x932786(0x2ce,'D)fH'),_0x54c388[_0x932786(0x1a6,'g(Ye')])?_0x54c388[_0x932786(0x255,'SRE)')](_0x585184):_0x1777ba[_0x932786(0x180,'IjQi')]('\x0a【'+_0x43b3ed+_0x932786(0x1bf,'mr40')+_0x4cdf3e[_0x932786(0x155,'NU7(')]+_0x932786(0x26d,'e#Qs')+_0xc27caf[_0x932786(0x2b1,'4Kui')]);}});});}function Format_time(_0x3e915a){const _0x37f36e=_0x537bc1,_0x18eef9={'xWggV':function(_0xce521c,_0x2c1062){return _0xce521c+_0x2c1062;},'qGHFS':function(_0x351e87,_0x2853b9){return _0x351e87<_0x2853b9;},'LFwpS':function(_0x1df38f,_0x1a2c50){return _0x1df38f+_0x1a2c50;},'UwPxa':function(_0x56de8d,_0x4dd6df){return _0x56de8d+_0x4dd6df;},'FGKFI':function(_0x1e80d6,_0x43f5d3){return _0x1e80d6+_0x43f5d3;},'GHJhP':function(_0x514870,_0x36dfe8){return _0x514870<_0x36dfe8;},'ghVVN':function(_0xc31ac1,_0x10bf6a){return _0xc31ac1+_0x10bf6a;},'bOIVn':function(_0x24f1b3,_0xfdb61d){return _0x24f1b3+_0xfdb61d;},'IKLet':function(_0x330a7b,_0x4e8775){return _0x330a7b+_0x4e8775;}};var _0x544cb2=new Date(_0x3e915a*0x3e8),_0x51c101=_0x18eef9[_0x37f36e(0x216,'mr40')](_0x544cb2[_0x37f36e(0x24b,'hAuM')](),'-'),_0x10c018=_0x18eef9[_0x37f36e(0x2b6,'ip5r')](_0x18eef9[_0x37f36e(0x1ef,'SWPx')](_0x18eef9['xWggV'](_0x544cb2[_0x37f36e(0x305,'RBpK')](),0x1),0xa)?_0x18eef9[_0x37f36e(0x113,'e#Qs')]('0',_0x18eef9[_0x37f36e(0x177,'[z[c')](_0x544cb2[_0x37f36e(0xfe,'#njV')](),0x1)):_0x18eef9[_0x37f36e(0x247,'AW%A')](_0x544cb2[_0x37f36e(0xf0,'[z[c')](),0x1),'-'),_0x7b96cf=_0x18eef9[_0x37f36e(0x2ee,'2%9f')](_0x544cb2['getDate'](),'\x20'),_0x1084bd=_0x18eef9[_0x37f36e(0x2aa,'2%9f')](_0x544cb2['getHours'](),':'),_0x5c3c95=(_0x18eef9[_0x37f36e(0x1cd,'6Ora')](_0x544cb2[_0x37f36e(0x30b,'NLPU')](),0xa)?'0'+_0x544cb2[_0x37f36e(0x15a,'E]5J')]():_0x544cb2[_0x37f36e(0x2cb,'SRE)')]())+':',_0x564440=_0x544cb2[_0x37f36e(0xd1,'zQdv')]();let _0x225d83=_0x18eef9[_0x37f36e(0xc8,'Ll]7')](_0x18eef9[_0x37f36e(0x101,'SRE)')](_0x18eef9['LFwpS'](_0x51c101+_0x10c018,_0x7b96cf),_0x1084bd)+_0x5c3c95,_0x564440);return _0x18eef9[_0x37f36e(0xe5,'s4iR')](_0x18eef9[_0x37f36e(0x244,'#njV')](_0x18eef9[_0x37f36e(0x242,'P1pE')](_0x51c101,_0x10c018)+_0x7b96cf,_0x1084bd),_0x5c3c95)+_0x564440;}var version_ = 'jsjiami.com.v7';


function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s)
        })
      })
    }
    get(t) {
      return this.send.call(this.env, t)
    }
    post(t) {
      return this.send.call(this.env, t, "POST")
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports
    }
    isQuanX() {
      return "undefined" != typeof $task
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon
    }
    isLoon() {
      return "undefined" != typeof $loon
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t)
      } catch {
        return e
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t)
      } catch {
        return e
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t))
      } catch {}
      return s
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e)
      } catch {
        return !1
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i))
      })
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"), a = {
          url: `http://${h}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: r
          },
          headers: {
            "X-Key": o,
            Accept: "*/*"
          }
        };
        this.post(a, (t, e, i) => s(i))
      }).catch(t => this.logErr(t))
    }
    loaddata() {
      if (!this.isNode()) return {}; {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {}; {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i))
          } catch (t) {
            return {}
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i)
        if (r = Object(r)[t], void 0 === r) return s;
      return r
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e
        } catch (t) {
          e = ""
        }
      }
      return e
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
        }
      } else s = this.setval(t, e);
      return s
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
    }
    get(t, e = (() => {})) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
          }
        } catch (t) {
          this.logErr(t)
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body)
      }))
    }
    post(t, e = (() => {})) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      });
      else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t));
      else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o)
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body)
        })
      }
    }
    time(t) {
      let e = {
        "M+": (new Date).getMonth() + 1,
        "d+": (new Date).getDate(),
        "H+": (new Date).getHours(),
        "m+": (new Date).getMinutes(),
        "s+": (new Date).getSeconds(),
        "q+": Math.floor(((new Date).getMonth() + 3) / 3),
        S: (new Date).getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
      return t
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            }
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            }
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            }
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
      let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
      h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t))
    }
    done(t = {}) {
      const e = (new Date).getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
    }
  }(t, e)
}
