#import "SMXCrashlytics.h"
#import <Crashlytics/Crashlytics.h>

@implementation SMXCrashlytics
@synthesize bridge = _bridge;

RCT_EXPORT_MODULE();

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

RCT_EXPORT_METHOD(log:(NSString *)message)
{
  CLS_LOG(@"%@", message);
}

RCT_EXPORT_METHOD(setUserIdentifier:(NSString *)userIdentifier)
{
  [[Crashlytics sharedInstance] setUserIdentifier:userIdentifier];
}

RCT_EXPORT_METHOD(setUserName:(NSString *)userName)
{
  [[Crashlytics sharedInstance] setUserName:userName];
}

RCT_EXPORT_METHOD(setUserEmail:(NSString *)email)
{
  [[Crashlytics sharedInstance] setUserEmail:email];
}

RCT_EXPORT_METHOD(setBool:(NSString *)key value:(BOOL)boolValue)
{
  [[Crashlytics sharedInstance] setBoolValue:boolValue forKey:key];
}

RCT_EXPORT_METHOD(setString:(NSString *)key value:(NSString *)stringValue)
{
  [[Crashlytics sharedInstance] setObjectValue:stringValue forKey:key];
}

RCT_EXPORT_METHOD(setNumber:(NSString *)key value:(nonnull NSNumber *)numberValue)
{
  if(numberValue) {
    const char *objCType = [numberValue objCType];
    if(KWObjCTypeIsFloatingPoint(objCType)) {
       [[Crashlytics sharedInstance] setFloatValue:[numberValue floatValue] forKey:key];
    } else if(KWObjCTypeIsIntegral(objCType)) {
      [[Crashlytics sharedInstance] setIntValue:[numberValue intValue] forKey:key];
    }
  }
}

// These functions are borrowed from https://github.com/joecannatti/Objective-C-Koans
BOOL KWObjCTypeIsFloatingPoint(const char *objCType) {
  return strcmp(objCType, @encode(float)) == 0 || strcmp(objCType, @encode(double)) == 0;
}

BOOL KWObjCTypeIsIntegral(const char *objCType) {
  return KWObjCTypeIsSignedIntegral(objCType) || KWObjCTypeIsUnsignedIntegral(objCType);
}

BOOL KWObjCTypeIsSignedIntegral(const char *objCType) {
  return strcmp(objCType, @encode(char)) == 0 ||
  strcmp(objCType, @encode(int)) == 0 ||
  strcmp(objCType, @encode(short)) == 0 ||
  strcmp(objCType, @encode(long)) == 0 ||
  strcmp(objCType, @encode(long long)) == 0;
}

BOOL KWObjCTypeIsUnsignedIntegral(const char *objCType) {
  return strcmp(objCType, @encode(unsigned char)) == 0 ||
  strcmp(objCType, @encode(unsigned int)) == 0 ||
  strcmp(objCType, @encode(unsigned short)) == 0 ||
  strcmp(objCType, @encode(unsigned long)) == 0 ||
  strcmp(objCType, @encode(unsigned long long)) == 0;
}

//RCT_EXPORT_METHOD(setInt:(NSString *)key value:(int)integer)
//{
//  [[Crashlytics sharedInstance] setIntValue:integer forKey:key];
//}

//RCT_EXPORT_METHOD(setFloat:(NSString *)key value:(float)floatValue)
//{
//  [[Crashlytics sharedInstance] setFloatValue:floatValue forKey:key];
//}

//RCT_EXPORT_METHOD(setObject:(NSString *)key value:(NSDictionary *)obj)
//{
//  [[Crashlytics sharedInstance] setObjectValue:obj forKey:key];
//}

@end
