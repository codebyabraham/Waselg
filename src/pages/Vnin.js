import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import image from "../images/image.jpeg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";

function Vnin() {
  const storedData = localStorage.getItem("transid");

  // Parse the JSON string back to an object after retrieving
  const transactionId = JSON.parse(storedData);
  const [vNIN, setvNIN] = useState("");
  const data2 = {
    message: {
      firstName: "OLUWASEUN",
      surname: "ODUBORE",
      middleName: "ADETOLA",
      dateOfBirth: "02 JUN 1977",
      gender: "M",
      trustedNumber: "2348034829134",
      txid: "b893d919-1ba7-4d42-b4cf-3a90a0fd6989",
      ts: "2023-10-06 15:53:00",
      vNIN: "PU3593985543262V",
      photograph:
        "/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAHSAV4DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDfooNFAhe1HWk5ooAUDFFFJjmgBaKQ0tABRRSGgBaKO1HegAooooAKKKKADtQelFIaAFooFFABRQRxRigAoxijNJnmgBc0Ume9FAC0UZzQaAFFN70oPakyM0AHrR2oooAKKKAaACg0ZooAUdKKQUGgBaKQUtABRRRQACg0GkoADRRigUAFFFHegA5pRSdaKACiiigAo7UZpM0ALiiiigApaSigBaQmiigApaSkJoAdSGhaUUAFJmijgUAIetLjikJFKGyKACg0lB6UALRSZozQAbfmzmjGDS0h6UALSHPYUUEmgA5xzR05o7UooAb1NO7UntRnHFACjNGaCaOo4oAM0tJQTQAuaTPNFGe1AxaSkzR+NAC0nNB60ZoEFFHWjNAC9qQ57UDkYo5oAKKKA3p0oAKOhpD9KO1AC5zRzSUHIoAU9OaB7ZxSUucCgAopM4oyaAF4oJwOOlFIcetADsgcmkz6Uhzjk0mfrQAu71FGc9KUEbaTtxQA11LJgHmnjgAGkDZ5pc5oACcDNGcimk5BGKB0oAXHFApAwJpSaAEJ9qUUA5FJxnFADqQ0mTS8UAL0pAeaO1Jk+lACnnvSA7RzzRxnqaXigAPIpq+9O7GmgZoAfmgjIpuD3IoP1oAXOKN3NHHrRigYHmgcUcUFgKAAcikzSUUAOozScUlAh+RikHSm5pQRQApNJkDoaM0mRk8UALnNBzSUA8daAFLetGeMUnB70UAL9DRik/DFJk0AOPSgMB1pAc0EUAGec0Fs9aSkY4FAD8jvRnmmjmjoaAHZJGKTt70hOO9FACgmjPHFJmjPpQAoY+lGfekpRigBsYKghuTTz1ptFAC0h56UUo6UAHPWjvRRQMMYoAI5oPrSBuaAFJ5o7ikPNKKAAEgnFLzjimg8mjkHrQA7k96Acdqbk5o70CHUoNMyQaUUDFz6UnNHFJmgBaBRR0oEL60lBPakHTmgBwpp60Drig9aBhmlzke1IetJmgQ447dqCc9qTijpQAUUUnWgYvNLmm0dqBDuBTe/WkpaBhTXTeME96UnBqje6jFYgtI2AKBGhwOKQsPWuHvvHSRuyRJuGcbqyJ/G96x4UY9DQB6XJPHEAZGAB9aqNq1sq58xSPUV5Td6/fXmfMmbB7ZqkL+deBKwz70Ae0Q39vOxCSA4qxuGeP514rb6tdwtuSZhznrWvF4x1FHDM4YehoA9WyO45ozXAWXjs5C3MeB6g101j4jsrxRskH0JoA2aKjVw65U5FPoAKWk70vSgAopM0UAKaTPNFB4oGLR2pM0vGaAGqcsRS96TA6il7UAFKetNzmigB2aM03rS0AKOaTpRQaAFzSE80lLmgQufajr2pM0ZoAM4NGTRn1ozQMOaKKM0AFBNFIaAFo4oooEAOKM0lFAxc00kAEk4x3pk0yQxtI7AKBzmuJ1/xiI2aGzYNwQWoEbGt+JbWxhYJIDKOgrzzU9cutQlZnchT0FUJZ3mdpHYkn1NV2I/GgdhWkzSB8daadxAwKAjdcUBYXdluDRznqKaSQcgZpMH0NAWJDxSjmmoHPGDUgjcnkEUBYbk5qZZXjxtY+vWo2ilHbNCow6iloFjodK8VXlg4DOXjGPlJ7V3uj+JbXVTsU7ZP7pryIqcZAqWG6kt5Fkjcq68gimKx7mrAjIOaWvPdC8ZsjJb33IJ4eu3tL+K8TdE4ZfUUAWj7UfSiigAzQRSGgHjNAxRRSZpaADNFFIWwaAFo4pM0o6UAFLmkoHpQAtFJS5oASikpaACiiigQHpR2ox8tNQHBzQA+k70UUAKetJRzR3oAKKCaKACopLhIo2ZyFVeSTRK4jUsxAFefeLfEryl7KBxsH3mFAB4s8T/AGofZLN8Rg/M471xgy5PUmlRXncACte0sAo3N1qZSsaRhcz47R2GSOtTrpjN1FbUcKrxgVYjjGeRWbmaqCMiHSxjpUp0oHPGK2NigUm5V4FK7Ksjm7jTjEcqDS22nGR8kcGt2RQ45FNjULwKOYORFePTI1bpSnTlJ4FXdxzThJSTHYz208dxUMmnKBwK2CwfrTGSi4mjAks9owBVOW1ZeQtdI8IY9Kie3BGMValYhxTOXYFG54rW0fXbnSZ1eNy0efmQng0XdgGBIGDWS8bwMA2cGtE7mUoNHs2l6vDqdqs0XOeCPQ1o143o2tT6TPvjbMZPzKe9esabqEWo2aXERyCKZBcpCcc0ZpsnCEdT1oGPJ70ZwMmkHKD1xSEZGDQA7NAxknrTcE8Uq5HFABu4JxRn1oJ9/wAKMjGcUAIdxIxT6aGpc0AL7UU0nFLjjrQAHoaKCCVOOtCg4GetAC0UUUAID60dGPpRijpQIWgmk60UALRmkyaCKAD8aDx1oqpfXSW1s8jHAUE80Ac94z1oWdl9ljY+bL6dhXmZZpZMEksT3q7rWpvqV+8zHHYDPQU3TbcyPvYZ9KTdioq7L9lahEHHNaMaY69KbGgUU/dWLdzoSsSBeaeCVqFX7VIMtzjikXYfuJ70BdzYzipI4mfHFWFtSCcZI9qdguiqY+4FNA5q75LAgDNMaDBzRYTZUKkUgHtVoxE5AHTvTPLIzSsMiGakDcYo2EfjSFPwosAjAEU3GRinDvxUZODQFiOSLIrL1CzEkeQORWxmo3jDA0XsS0ceQYmK9811PhTXnsLkW0zHyX6exrF1O3CPuFUlcoQwzkHINbp3OaUbM9zSQPGCDwRTiBxXM+GNcXUbVYW4kjXBBrpcc5zTJF5o5JoHvQSAcUDF6Hilpp6ZoBoAU5oAJB55oJpCcHg0AAI79adnjimOOaUNigAYnNOBxRx1o6UAOo3U0nsKbQA80c00UoIxQIdSUZwM0gINAC0cUm6loAKM0nSg0AB6Vw/jjVjFEtmp5cfMK7aQqsZZjgDrXjvia+F7rMzI25FO1WoAy44/Nkx710FnEEQYFZOnQANuPNbqYC8VlNnRCOhJmkLUmc8U1qzua2Hoc81bVv3YGeB2qhkg8VagfcBkYxTQ2attsG0se1WMgOcDj2qnHME4AB/pT1nCHGODVmbLZKYHuaQxrtznrUCzKxwMjB9OtTiVPLJxihCE8pdmAajMWeAKkWZWJ68etI7qxBDY9abQERjGOeahdOvFW5NoHAJqGVtoyTx9aVhplNhg5qu3WrT4OMHg1WlO2osVcaWoByKYexpyUAUNQh8xTxXPupSRge1dXNgggVzl/HicsBVx3Mpq6LugXpsdVhkydpO0164jh0VgcgjOa8OjchgehBr1bwtqP2/R4y330+U/hWpgb+eaaX/ebc80Um0bt3egBTzSd6Wlz7UAJnmkzk0poAoGOPIpCM0UhoAdnHFGRTc0bqAJMcUmDzRmjPFAAOlNVSoPNOBx2o7UCF6jNJ070mRjijNAAeRS/jTc5peooAdn1oJpu7A60Z70AY3im+Njos0it82MAV5ATvkznknNehfECYrZwoDwzc157EpeTpxSY0tTWs12qMVog8cVRthhaurWMjqiiRTSE9RSYx060EetQaIbnmnRuVYYJFJwAc1ExOcgUDNFZSeGI571J5w4wyk9wDWWXdSOakSUgbhj3NVcnlNNZHYkB8fj0qVWxkl93t61l+YpbIP41Os4XA4BPei4rF1Z2LYYsB705ZSrdcY6+9UGkJIIOfrTlZgMnPIqrhY01uATjdUU6LKMMcioF+6MNzTsPt6ihsmxGybF+Vs/WomBOasMcL9Krhgc4NSUiNugHpSp0oZQTkGn7QBQDIJehxWNqIJUY9a2JTgGs255Vh3qo7mbMVq7DwNf+VePbO3ytyPrXHyEg1d0e6NrqcE3IAYZ+lbGDWp7SOe1BqK2kMkCvzyKkzQSL1o5ppYg9KdQAfjSDOTRjjNFAxe1IT6Unc0EgDFAAT2pBnvTR7U8D0oAdmnU2lFACc0oJ9aTNFAC0nNBoFABSZpaYoxQA/NBPFJQ3NAjz74gv+/t1z1B4rj7b7wrqfHz5v4l4IC1ztpGWIbFTJlwV2aVugx3q0OwpsUZ2dMU7G08msWdSWgvQY703Bpc1IvXpSHcj8tjxipo4Nw6GnhM9jVmFBnmmkJsqC1Peo2t2DcjittY1K9KUwKwweRTsCkYTxBRyPyoVFyr9/StaW0IHC5HtVIxBTjBxnjPapKvceqblyB8tWI4m2ksM+lRwxYIJzj2q9FgHGeKaRLZELfGGGCajkVi+B0rQbp8oqs6nBJHNXYi5TckDAqMDA96sMnPSmGI5zipYyIDvSHpUjIRUTkgUAQSnis246sR3rQlPFVmTIpiMCUEOQaYjbXDDsa0LyDaC2KzRjIyO9aowkj2fQpXl0iCRyOVHStHPfNYnhZ92iQc9BW0cEUyRaUGmZIOBS9aAFopAaQtg0AOzTSM0A07jFADRwMUopKUUALS5pOKKAFzRmkooAWikooAKTvRjmg0AHOaKKOvegDzjx/Di/hkB6rgisfS1BizjOK6P4hRjZbSjrnBrntIGYCfepnsaU3qagxt4IqOQE0DilkkRI8nrWLOgRE9auwxr3rFa7bccU5L+RTzSsFzewo9KnjMa4yRXONqhXqwqI6wQeoNNJi5kdW1zGBhccULcr6Y/GuUGqOSCSMVYW/LAc4o1GkmdQJxxhqrTDLHcOvesmK93sB096si77Mc4pXKUSzGxU45Ip3nMoJyMVSNx2WoZrnjBxmi43E1o9QQEAkVa86F1yOM1x0l06EnP0qP+150G3dxVJu5nJJHZbVPORTHeNRjIrkBrk3QE1Ml1c3HOcU2rE37G/JPEDwcmq7Sq+e3pVFUfbl3JNRyHAzuxSAsSriq5btUH2pieTTllDmgGMulLW7euKwwPmxnnNdDJzE30rCiwLgFhwG5rSBlM9a8Np5WjQKfStcHmqOk4/s2AqMKyAge1Xu3SrMxDn8KOd1ITgcmjd/tUAOOCPQ0xqUHnmkYHNABuIp6scVGfenKcGgB4OaWmDril70APooooAQdaWkPSgGgAIy2aWiigApKKKACjOKDSHpQBy/jiDzNIDBclW61xWjnETj3r0zV7cXenyxHByO9ecWdu9tJMjDGDxUy2KhuSTTbAearCYucE028fB5qoJMDINZ2udF7GkQgjzgZqtkFsCqUl4chQST6VG80iDcce3NFg5jQaBW6dapzRFDnbUK3sh4oa7kPBI/GqSZHMgWXBxU63GMc1TeQt1Xr3FRliDxRYOaxsRXOD1q2s+TnPFYcLljya1reJnHTNZyRtCVyc3OwZzVeW7JPWppbRwuccVlXCtGTSUSpSJZZ93U1XaTJ4quXYmm7n7cVolY53K+ho24UkFiBWrHPHGgGRXNlnUgHdn8qmAlxkAnP+1T5bgppaG/JfKFwDVOS63mqG1tm9o5AD3FRszD5o3DD+6etKw3IvbxUkcnPtVKOTeuamiUkj0p2BammuHjI9qyIYg1yFb+9WrDjbgHNGkxImt24kXcpkAOfc0RIkj0jR43h0m2R/vBBmrvUcU0fKuAOBQDmtDIdnsaDx3pOaVvegBOcUZoHFH1oAeBn6UmOetAJz04o3c880AO6Dmg4FHUc9aCBQAtLSUHB60AITzilPao1JLnjinZweaAH5opM0ZNAC5pO9FJmgBTScUpPFMJ5oASRQykHoRXC6ta/Zr18HKt6V3DNXNeIIVADjqamWpUdzjL2AvzzWeYpCCFXIrpmiV05AqukCrnAFY3sdfKmjmhZzNlwp45zXReGbK2YNLOiu+MYcZqy6xrGBxVRphav5kJwD1Ao5mwUEjH1GzktdSlUo20nKlRjireiafLqF2odWMAOWz0NaS6rbS4+0KScelTR61BbqRDuA9AAKvmdjLkVyprOgxJOq2XDEElCaw4bQSzmCTAfsy8810qzi7kLJapnu8nNQ3YKDACBvRVFCdhuNzBitGin2k8g11GlW24dO2ayIYi0mT1rqdGhHzE56cVDld2NIx5UMvbVFh9O9cvPEHfaema7C9QyR49K5u5tyGOOtLZlWujOvtPS2SMxksXAJOOlMgsoo7qPdKkoPJ2npWtAzONsmQegNLKLiEjbtZOwK1fNcytZjdX0stbI8CBivPHpWHFZ3MzqEhYEnBrd/tZ1G10I+hxSjU0wAike9Ck0KUE3c1UtrWx0cQTAFimMHqTXMNpweQlRt9K0nvRKckZ9CeajVy7fKKnmZoopIqxac+6rosCqZxWjbxAICetLKewoUhNGSi7XxV7QLdZtbUsM7CWA/Cq7L+8961fDG0atK5xwtaRMZ7HaLnbinUxXBGRSg9M1oYj8nPtRmkz3pvcmgBctg/LTh9KTOaNxP0oAcuMYoPpSDmlxQAA8U7NMooAfg568UpPpTdwozSAdnj0pD060n1pCQDTAdmgHNIOemaCcd6AHfjRn1pu6kJoAUkVEz0M+KhZ+tIBWfrXP6xKGQITk5zW2xGCT0rlNTuFlmyBj5iBR0GtytzsxTYwMnNSRjcuKYylHNc73O1bDZYg4xWZcWci8qTithfmqZYFcZJoQHKC2k71bgtRuyQWrcewX3J9KkgtQj4UZ9eadybEEVu0a5OQfSoJI8sa07jAT0rNbGaTZUdxkUQ3Vu6cwVSBWRH1rVskYRFh1qFuXIs3BBT6ViyoGkNacrcdfrWc+A9Nu4oqwCBQVOKvLao8WMZyKrLKMc9KuQTArgEGmiZIyLvStxJUcCs46c6nG012BQMAe9QeQSTu9eKom9jAt9KZzliR+FXksEhHvWwsHyZBqNoc9TQFygF21HIOM1alGwetUZJMAg0hsqtjfVvw7Mkd7OX69qoM/z+tO0UE6tnk7c9K1iYVNj0SP5kB9RTjnp6VFbvuhUkjOM1Ix4qzEQNjnNOzk5NRngetCsaAJlPGaXPNRA8dakB5FADhxS5ppoJGOKYC0E4pBzQTk0AOHFKTTN3vS9aAFJpu70oYcUxQc0gJgelFIORR09aYB1NRs2DSs2PWoHfNIBGc81HnP1o5JpMnNAEdxLsiY+1cHfXBW7CZzl89K711V1IYcGuU1jQ3kmkuUYIiDIHrQNbjLaQBtpNWJSCvFZiOQykdwCcVfRw6ZNc8lqdsXdEK53GrMblB2OetVZDtbI70nmkDqaVyrGkZBvGDgmmvcCJWJA+tZ5uSo65qldXZbIBP0oFYlu9SZ2EcZ71IhJUA8mqFrbF5Qx6962Y4ApycYFDaKQ+3i6ZratYi0ZwKywVAznitS1vUCAcVKtcJJ9CC4t3Qnjis24XHNdDLNHKMHFY1zEDLgdM8U2gTfUpkgxgd6qNJJbtvjJPqK1Tp79QpqpcxeVww4FCB2LVhqqSDB6961QVYBkOa4+ZPIfzYydprTs9QkwB1FXchrsdAGAycdKgkAPIJqFLsOmTgEnpUcs/FMgguGwODWTcuexNXbiVVj+8PbNZM0mT1pFdBUJ3ZzU2jzTLdSCBBu3FizVWQ8E57V0HhbS3W3NzIAfNPAPpmtInNUZ0lmWMYck4Ixg+tWyecGowFVcfnRu4znmrM0AOc5PTtSggZPNNLkjpxSg8dOtADg3PHSpQQR3qFQAcYOafk0AS5IFNPNN39OlLu70xD87etKDnuKiDZ6804kACgAOe1Oy1R5OaUt6UDJAeKM+1Rbj60BjnrQBPn1pGIxmo+vJNJI+B7CgBrsc1AW5pHkY9MUwN6nmkA/qRQQMcCm5oz70AGPyqKeNZYmQjIIqTPPTNHbmgDhrlBFIVHYkUqTFRjvVnV4/LvJPrWUzYOaykjpg9C202T1qNpqqNLzimeZUWNuYsPL71FHH5sgPWkQbzWna2oCbjQF7goMCiULx3xTJL884NXDF+7I7Gucu7eeKVtjEiiyYr8pqi/yMVZgvBjriuWWeVD8/NWUvFAznBpOmWqq6nUC/C984qlPqJMu4NgVjm8GPvVAPtFy2I1OKFAUqitodRHr/loBnJqvJqH26cKuOTzWXDo1xJjzGwPrW1p+lpanIGTVNIm9zSlsYpbbaMZ21zkiyWkxQ5xXUKSBWZqlv5o3jtQLYorcEYIapPtTEcmsxiY2waXzie9A7plmZw3JNVmbJphkJPWgcmmiWWIVyK7zTPksIVAAASuIth0rtrRgLeNfRQK0ic1QtlvSgEevNRFsUbh1qyCcDcM07gDk4x7VEp4xUmcCgADtk/Lx60d8im5wM5ppc9AM0ASZ55NIDgnrTRzTgp7UCBWIzxUw5HIpAmRyKlAGKAI80Gm5NLgmgYYFOxnpSDrS5oAMEVE/Xk09mqFzSAjIFJxRRQAZozzRkU3vQA4mjP1o/GkJ96QznNeixOGA4Za56QYFddrqFoEYepFcrIvPSoluawehTcc02pWGaaq/NSNUWrSPJGRWsj7BzjFZkTBRycYqvJenOM8ZqLNlXSOiWVGXHGKrXHkbG6H0rKju2xtVutPKuwBbge9Uo2E5XIJYo5mwFAqr/ZgZ8K1aMcUEcp3y8H2q7BFZNyJsN71VyeW5kHTVhCsTuPpVmOVoANsfH0rWNoiLuluIwO2BmoZJLNRgSHPqRU3uNpISG9jDbWOGrRS5jUAkjmueWFDMG8wHvViaJiu9W6elOyJ5mbT3sR74qrNdIy8GudkuZACDkCmJfEAKTRYfP3LF5jdkVXBqw58xAar4w3NFguOU81Ko6UxcVKvJFArly2GZUHqRXYwrgj0xXLaXHvvYgR3zXWlgG9variYz3HOOKRTjr0pR82R29aTYMgA1ZA9TxkE0NKFBOaTOD1pu3J9qBDWlYkYqWNsjmm+VycmnqAi4oAmXBqZduOKomTaeKlSXp70AWs+lOU4FRhhinA8UAR96XPFMJ9qKBj1OTSscd6jA96CaABn5qItQWpmaQBQeKKaaADPFOApo+6aM4oAdim49R9KcAWIA/Staw8P3l8QSvlRn+Jhz+AoGYN5D5to6+3FcdcxFeTmvdrHwtZ265ePzHP8AFJ/hXmXi7Rhp2qzRKuI2O9OOMGk0VCVmcS68YojUdalkQq2CKaoxzWRumMkbaDWY8vz4zxV25fINU47fzTVxRM2W4JQg3AAmnPcvIcOeKRNOLLhJCrelWINGd1xJMQfYUXQK+xCHQDmpoSmeKsDw6+0uJ+B6jrUQ0q9QZWPcOxFK5agy2GV49oPSq7NGuc8n3pi6dqW7CwkZOKvRaBesA042e1A+Rmc8sJ6D8qi+0FR+7kOPQmtweG7dE3vk9zmq0+mWinCRjP0oSJkrMwrm4DDCgk+1VBncMqQa6A20MLBQBmql1CC+QvQVSZlKLepHA5YVIwzUUale1TjkVL3LWw1RVmGMlhUQXJAFatjaNI3Az6UJA3ZGr4f0yefzbuOJ2iiwpZVzgmtjAGCOMe3WvSfBui/2T4fjjdBvm/eyAjpnoPwFT6n4VsNRUsiCGU/xLWiRzt3PMVII4oOAM1s6j4Y1DTWJMZlj/vqP51iOGVyCp+npTEGQecUqrgZIxnpTAeMZqXd09KBinnmlzzUZYk47U6gRFKcHpSRtk1K4BFNVQp6UAWUORT91Qrx3qZcYoAbmgUZpCaBjs0xjgUVG5OaAGE46UZzzTDnNGcfSkBLTe9KvJx39K6HS/COoX8YmlHkRHoW6n8KAOe4IxWtp3h67v8MR5cfqa6iy8K29nJlv3rD+J+34V0dtbLGo459aAMXTPDVrZBWMe9x/Ew5rZWNV4VasOtMJROp5oAj2dya4zxzpYvLMXMYy8III9RXV3Fw204O0VlPGLglXXIPXNFgPCr6Da5xVF0+Suy8VaO1hfOAD5TElDiuTkjYHAqWjVSMyZMnFFvhG5qe6UKMnis5H7A85pJDuaudh3KferEV3kdeayxM2MZprOwbK1NjW50cOoKBtY4rUtNVjVNpwa4oXRz8/BqaO5OchuKdgU7HY3epqYlEYAZWDA0DXDu3NhsVzAul245zULXBPfAosU5o3LrVvOJ2jqegrOkudg5PzGs1rsLkL8zU1WduW60EbltGJYsTzTZp0xg9aqyXG3gVWdmY7smhK5MpWVi6rBxkVKo46VBZjzFxV1YvmwKqxKloPtoTJKAO9ek+CPD63d4k06H7PCQTkcM3pXOeFtBk1XUobdBgsclj2Fe0x6fHpUVtZ2/Eajj3Pc00jOUjbWP5Rg0jIVNRRSsuAeastIrp15qjMj2Bl9R71h6t4VsNRBdYxFL/eUda6FUBXI60/blemKAPHdV8N32lkvJGXiB++nPHvWOSeCOle2TRqS0TqGVuMGuP1jwV5heewIBPJjPT8KBnC9BnFPU5XNTXVpPZyGOeMow7EVBQMcORTXB4x1pc4pBzQA4fWpAx6Co6UECgCSim5pc+9AAcComPpUjHg8VCxyOKQDantbSa7mSKBGeRjgBRWhovh+71mYLEpEQPzSHoK9P0fQbXR4QsCZc/ekI+ZqAMPw/4OisClzfASTjkKOVX/ABrqHBxtUYFWcKinJA+tQ+dHu5ZaYmVTbn71PQADnilnnjxtT5j7VWw7H5mOPQUgQ6R2fOzhfWodoUFjk/WrLLhcCqV5JsQigZQuZC7lRT4U2rk+lRRKXkzVphhcUCMXxNp8N34fnd1BeMb1PpXjlxb4bI+6ea9z1ZA2g3a+sTfyrw17gRuUfmMnj2obLimzOuINylcdqwHQxSkeldg8SFNyHcK53U4Dbys+OH6UkNspKxJz2q3Gu9eOapZO0KDVy2yjDJwKUkVBiSWpbsarNbsp4JFb29doOM1XkCsScACs1Jo2cUzKVZh0Y1IttK/U5q/GqE8DiplaNXxTcgjBFWGx29RzUkkBjXJ6VdFzEFOetZ9zdh8qOaSvccmooouo3Zz+FRO3Py0523MDTOr8DvWyVjlk7s1NLhcgselbVpaFpCzDAHeo9MtQtsCTgdSfSrUlyrHyoR8vUt60mwSud18OR5niNtv3EhJ/M4r0675voh/s81538Kbdnu9QucfKoWIH36/1r0WX5r0n+6MVSIe49eWqUgbD61WjOXqwTk4oEOt3IXrVyNg4JzVWNcAmpVUgZFAEV3Gd6+tOCkAZApkjsTk84p8UyuuD1pAUdS0m01GIrcRgns3cV59rnhefTMyxZlh9R1FepSISoqtJGsimN1DKeCCOtAzxU0DFdj4g8JtEzXFimVPJT0+lcgyNGxVlII6g0DE4pKWgUwH4pQKMY561YsbG4v7gRQRs7HtikBXKE9Oua6bQPBtxqLLNdBorfrjuwro9B8GQ2my4vcSy44U9BXVGaOBQoxwOBTFcZZ2MFlbpBBGqRqMAAYqWSRFBGeapy3jswxxTASxyTk5oAJ2JHLd6p/x8jNTXRwBUQXGKYmTxoCw4p7phulLb8uKsNHmhiRWY7UJrDu5C7kVs3Y2wkisI5aWpLLNvHhBUhHBFOAwlRscg0C6jZohNZSxf3lIP0r5+vlKTyxNw8bsjfUEivoKJtwK/hXiHjey/s3xXdDGI7j98v1PWkzSGjOfS7e2kBByvcVZlEOownaAW9+tZ8nPNQJK8EgZDg1KZcokHkMszRsm0g8VHlkbGa2hPBd7SyhZ/0NZtxaSRTHepweQR0q9yNhq3RAxmgyn1NQbQH4NPwgzk5FTyj9oydZsc0rTgn0NVxIijHJHrRK0RUFetHKP2ug95zggdaq7iTg05Ackkj8TT0heTG1cknsKq1iHK4mxPLGGO49vStDTbDe/mSjag65FSRQRQxr5uGIOdo61LNctL8vRfQUmxqLLUtwXAhi+WMdfehCsa56AA1UjIUcnFaehae+u65aabH0lkG9vRRyancuySPavhzpx03wnBJIMSXGZ2/Hp+ldCDuEj+tNYJbWqQRjCqAoA7Af5FKR+4FaGDGxkAirSDcc1TQdKuxdKQiUnGAKmydoqvn56sgZVaAIZsCMnvVe25zU130xVe2JEhX0oAsvcFDj0qEXKs4IqG8J80gVAQYo89zTA11Ec4wQPesTWvCNtqKF0ASUdGWr9s5KA96uxXBHXmgdzyDU9DvNKlIljJjHRwOKzTXuVzaW1/EUkRWyOQRXB6z4HlSfdZEFCfuN0H0oC5l6H4budXkDEGO37uRyfpXolhpllpEAjgjCkdW6k1MpS3hWKBQqgYAFRMCeSaBkklwzDAOB6CmABhzSFflpFNAgKAmmqSr4zUmcc1CzqDk0CC7YYFNB6fSopDvwalUfIKYFm1xvGauscCqdrgmrTkE0gRVuuYitYwhImrWlyzU1oBjNAXKRHFRMODVl1Kk1AetIEUw/ly9eDwa4v4m6Kb3Sk1GFSZrY5IHUr3rs7kYao5At1bPDKAwZdpB9KGVsz5wEuVHNMYg1ueL/Dc3h/U22hjaSsTG4HT2Nc55mPpUm1yQMQTg1OLiTABOQOxqtvBpQaBFvzoGHzQDPqDRmyxyjg1WzS0XFZF0yWITYEPHtUW6yAOIWJquBTlXmi4KJKPKJ3CBfqaf5jAbRgD0FRjgUtJsqyAkmlBx1ppYConkoK2RI8vYc54AHevY/hZ4Yl0+GbVr2LZcykoikfdUda5L4b+D31a/TVbyP8A0OFsxqw/1jf4V7e/7i3OQB6AU0jGciKaTzJwoPAqaQ4UD2rNt2MlxWhKeKszEiGavR/KuapwirTHaoFIBVPJNXIz+7HtVFDV1P8AVUARXQ4zVK2b/STzV2flKzYiRc/jQBNIC10xqK6GBirYH7wmqt19+mA62JCgVbFVIsAirYFAEisUOamEwI+YVX6kU7HY0AR4zyaXFFNMoBxQMdntTWAFL3pshwtAhrsoU1SZt74FOnkOCAaSBc80ASEAYFTYzHxUR+/VlV+UUxD7VcZJqdz8uabGoAokPakMiHLVIw+XpUaD5qlIOKAKc8eVyBVA9cVsldw5FZ1zDtbIpMEZl1xzVQuRyKu3OStZzq2aCivq+m22uae9rcplW6Hup9a8T8SeFr3w/clZULwMf3coHB9jXuQk2Nim3VpbajbPBdRrJE4wVYUhpnzgMr/9frThJmu78UfDy5sC11patPbdWjHLJ/8AWrg2jZCQykEdQR0osXckD+tPDiq3IpNxFFguXgVp24KOKoCVqeHY9aVhplvzKXfVUE5FWra3nvJRDbQvLIxwFjGTRYdxjGus8HeB7rxDOtzcBodPU5LkYL+wrpPCnwx2FL3Xceq2wP8AOvUIYIoI1SNAkajAUDAAoSJlMWwtLewtI4YUWOCNdqqBUd3ciQYHAFE8xPA6VSlbJwKsxLenpl91WZfvVHZDbH+FSNywoAmgqWVuRUcI70shzSYDo3ywFaEZ+XFZkf3xWmn3RQBFcfcrOjH77NaU4ylZ6jEo+tAF7bjmqVwNz1o7SRVCfh6YCxqOKt7cCoIl4zT1kOcGgCTnrTuaByKDwKAIScCq8mc5zUzdKhfGKQ2WIm3Lmo5X4xRanIYGmTcUxMqPkt+NWoV+Wq+3LVc2hYwaBDFXMlWgMAVXjB3ZFWR2+tAEy9KjbrT81GTzQMF605qRaUigAVqguo9y5p44anMQRjFAjDmXGaoSLWxcRjcfSs2aIgmkVcz5UyRUltEzg46LUpjzU9vCUQ5OAw5phcpjIBGO/Wuf1vwlpGtqXeDybg/8tYhgn61vtGwcvxkn9KjjfbcAdOKQ0zzO8+FF+r/6LdxyJ23jaaoyfDDWEPMsB/GvYUnKnBGaV5Q/agdzxofDTVc4MsH/AH1U8fwv1hx8s9v+LH/CvWlXL5xVxTtFAXPN9K+EqK6y6nqO5B1jhQgn8TXoGlaFpeiRBNPtEj4+91Y/jVwvsTI4J9OtSDOw7eM9yOTRYVyRVZiGOSKieZjwRip4o3aNnOQFqrP/AK0j0pkkUj8GokG5qV85xUtuh3g0AXYjtjH0p4OTUfRachORSAtx8LTGOTTicKBTV5akA9BhhWjGMpVB+GFaEJzGKYDJRlTVEIRID71osMjpVZ1CkGgC1j5AazZhmWtPP7gfSs8jMtMRIo2x1X3HzRVojC4NVP8AlpQMvr93NNlbaimhT8tQXDHIA7UAB5zUcgwoqVlJY1G/IxQDEt3+Zx7VDM2X61Lbx/M7dsYqvKMP+NAD4fmkxVtj8mKrwrtyalJ4oESRD5alXrUcYwtSqQBzQCHE80w9aCcmlHOaBiqKDSrS4/OgREetBFOZSKcoyKAKU69/SoGtxIuat3K/LTYeRigDKktyo4FSRx5iwa0JIgafHaZjJxQBhSQZfkH6VSMf+k9MYrpWtiynAAH05rHntwl0OvJ70DTIRb+poFvzwK0/snOQKeLXHIFA7mcICvapk9Nua0Ftt3UUptAoytArmaQN4+UgZFXFCsCoHPqe1MaNlYHOOe9TYYDJx9RQBJA4SzlVh06e9YjHMrZPStLeTGwYYrM/iagENAy1XIVwagRc1diQbc0gA/dqSNelMYYWpoh8tACyfepY/vUxuWzT14IoAll6rV634QVTk521egHAFAEu3PFVblSFq6enFV5+QaAGo26ACoVj+fJp0H3MGpAuDTEQy8Cqp+/VidsZqsDl80AXEGUAqJsbzmpYzkcVTnk+cgUAWC2GqKQ5bijdmiNfMnA7d6BliNAkAHrzVCb/AFuK1JMBcDoKz3TdITQA9B8oGKXaScUq8ECptuKYgHCgUpOBSqATStjsKQDQaf8Aw0DBxUgFACAZFOVaXAxSqKAGsuKYBUrelMoAr3A+WoIetWZx8tVoPvEUASuO9WYeIveoGHBq1EgMY5pgRhDzjr65rKvI/wDSUJIJyOlboUEdazbqMfaUwMfNQBYFuMClW3GavLENop3ligCmIMHpSmLHare3FIUyKAMi5gGOAOtQum2MjofStG5QcA+tVpYiEOKAMgNJ5rIcYxVEA+YwNbTRY54zWVIoW4PvSY0OiXmrq/KlQRL89WSMLg0hkb8mp0GEqBslqsgfIKBEFOB5oK0KpyaALiDcqmrsfaqsQ/dCrMXIpgWAeKilHBNSrTWGRQBTiHJqY/dpij94RT5flQ0CKcxDIcdaqKTv5qdzhTioEOXoA0I/uE+grPUGSZjV4nZbu3tVO0BKlvWgYF8McVcs1OS5rM3EqOe1a9qm2FR6igCRxwaq7PSrjfdNUzkZ9KBMZj96BVlxgCoY/wDWZqZstzimAn3RVeSfbxTpnwvWqJVmbrxSAvxTBqsCSs1FKnrU24jkE0AXw2aehqjFKSatI4oAmprDvTlbNBFAFeXlapxjEpq7L938apBttx9TQBb2HbVmKM+VntTAARU6nbCR+VMBAhAyOlZ1x/rkzz8wrSU/L71nXeftKf7woA2c8U2lpO9ABSGnUh60CK1yMKCPWoWQFCanuj+6/EVCTwRQMgeEHGB2rIubfEgYetbZbCFuwNU3Csx70hlaKPuKXbuOKmUYyO1KiZbNADFgO7OKkdcCriR5FMmgJXigDP5J4p6DGSaQjYeaTdwaQFqJvlq1FWdE2OM1eiamBdXGKae9CHilYcUAVcfvKLgfLTv4xTZhkH2oEZ03CVFF1zU0xAGDTI17igCzcHFk5qvB8kC81LdN/oRXPUiqInAAXPAoGEUbG52f7VbqABQKz4Ydt8zdgM1fzQMVvumqr/cNWD92qspwtBLHQdelSysFWq8MmFps8uRQMhmcHPNNRqYTmnKOaAH55p46UwAmnfdHSgQKSGqyj4qoCNwqVW70AX42zipc1SjY4z2qwGzQAjcg1nzfLKDV9m+U1n3JyM9xQBowsHAq0q5Ws2yfKCtFeVOKYC4O3rxms274uo/94VpKy7elZt2R9pj6/eFAGyTSZFJmkzzQApNNLetO60YBoArXLAx8e1IcFT2NOuhiLgYqNQCuaAGIBtZSPrVHoxHatEqDGx7mqDjGGFIBlWI1wv41EF3EVZxtAoGTR9qlODxUG/aM1KkgdRQBUurfjIrPK44rcYbhg1Ru4Aq7gKAKKHBq5C1UiCDU0TlTQBqxtwKlHINVIX6VaU0AROMEGo3YZ5qWT7ufSoDhqAKF0Pm4ojGEp9yCHFH8IoERX5IsWPpis6zHnA5PStK7G6zcHpVDT0EaE+tAzah++fpU46UUUDF/hNUbjpRRQSNi+4KimoooGQjrUq0UUASikb7tFFAiJuoqZfu0UUATR1OOtFFAAehqjN90/WiigCWyrUg+41FFCGInWqN5/r4f94UUUwNTvSfxUUUgH0UUUxEFx/qzUQ6fhRRQA5fuiqDfdb60UUhj4u1TP2oooAa3Si3+8aKKALB602bmE0UUAZX8RoHWiigC5BVodKKKAGyfcNQr1FFFAENx94VFRRQAy5/49Wqpbfd/CiigD//Z",
      barcode:
        "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",
    },
    success: true,
  };
  const [responseData, setData] = useState("");
  console.log(responseData);
  useEffect(() => {
    setData(data2.message);
  }, []);

  const onChangevNIN = (e) => setvNIN(e.target.value);
  const data = {
    vNIN: vNIN,
  };
  const navigate = useNavigate();
  const imageData = `data:image/jpeg;base64,${responseData.photograph}`;
  const Data = {
    name:
      responseData.firstName +
      " " +
      responseData.surname +
      " " +
      responseData.middleName,
    imageData,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/fetchdata", data).then((res) => {
      setData(res.data.message);
    });

    switch (responseData) {
      case "":
        toast("vNIN unverify", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/Virtualnin");
      case undefined:
        toast("vNIN unverify", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/Virtualnin");
      case null:
        toast("vNIN unverify", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/Virtualnin");
        break;
      default:
        toast("VNIN verified");
        // Convert the object to a JSON string before storing
        localStorage.setItem("Data", JSON.stringify(Data));
        break;
    }
  };
  useEffect(() => {
    // Redirect back to navigate page if transactionId is empty string
    if (transactionId === "") {
      navigate("/payment"); // Replace "/navigate" with the actual URL of your navigate page
    }
  }, []);
  return (
    <>
      <ToastContainer />
      <div style={{ height: "50vh", margin: "15%" }} className="row">
        <div className="col-md-12 mb-3">
          <div className="rounded-4 text-white bg-success">
            <div className="card-body text-center p-4">
              <h5 className="card-title">DIAL *346*3*YOUR-NIN*11987#</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mx-auto">
          <form onSubmit={handleSubmit} className="text-center">
            <h1 className="fw-bold mb-3">Input your Virtual NIN</h1>
            <div className="mb-3">
              <input
                type="text"
                className="form-control px-3 py-2 fs-5 rounded-pill shadow"
                id="vnin"
                value={vNIN}
                onChange={onChangevNIN}
                placeholder="Enter virtual nin"
              />
            </div>
            <div className="mb-3">
              <h3>
                Name: {responseData.firstName} {responseData.surname}
              </h3>
              {responseData ? (
                <img src={imageData} alt="image" style={{ width: "100%" }} />
              ) : (
                <img src={image} alt="image" style={{ width: "100%" }} />
              )}
            </div>{" "}
            {responseData ? (
              <Link
                to="/register"
                className="image-submit btn btn-success"
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                }}
              >
                continue
              </Link>
            ) : (
              <input
                className="image-submit"
                type="submit"
                value="Generate"
                style={{ fontSize: "20px" }}
              />
            )}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Vnin;
