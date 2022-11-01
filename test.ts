// tests go here; this will not be compiled when this package is used as a library

kapakai.servoInitialSet()
basic.showIcon(IconNames.Happy)

basic.forever(function () {
    if (kapakai.checkDistane(kapakai.LedLr.BButtonSide, 600)) {
        kapakai.danceMotions(kapakai.DanceMotions.DanceLStep)
    } else if (kapakai.checkMic(kapakai.LedLr.AButtonSide, 150, mic)) {
        kapakai.futbolMotion(kapakai.futbolMotion.DefenseLStep)
    } else if (kapakai.directions() == 352) {
        kapakai.basicMotion(kapakai.basicMotion.ArmPataPata)
    } else if (600 == kapakai.sensorLR(kapakai.LedLr.BButtonSide)) {
        kapakai.changeMotionSpeeds(20)
        //plenbit.setAngle([0, 0, 0, 0, 0, 0, 0, 0], 500)
        kapakai.setAngleToPosition(0,0,-90,0,0,0,90,0,500)
        kapakai.setAngleToPosition(0,0,0,0,0,0,0,0,500)
        kapakai.motion(0)
    } else {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    kapakai.walking(kapakai.WalkMode.Move)
    kapakai.walking(kapakai.WalkMode.Stop)
    kapakai.servoWrites(0, 0)
    kapakai.servoFree()
    kapakai.servoInitialSet()
})
input.onButtonPressed(Button.B, function () {
    while (true) {
        kapakai.serialRead()
    }
})
input.onButtonPressed(Button.AB, function () {
    kapakai.savePositon(0, 0)
    kapakai.resetPosition()
})